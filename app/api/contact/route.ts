import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// Validation des données
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(5),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Honeypot anti-spam
    if (body.website) return NextResponse.json({}, { status: 400 });

    // Validation
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      console.log("ZOD ERROR:", parsed.error.flatten());
      return NextResponse.json({ error: "Données invalides" }, { status: 400 });
    }

    const { name, email, message } = parsed.data;

    if (!process.env.RESEND_API_KEY || !process.env.RESTAURANT_EMAIL) {
      throw new Error("Env variables missing for contact API");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Envoi email au restaurant
    await resend.emails.send({
      from: "Contact Site <onboarding@resend.dev>",
      to: process.env.RESTAURANT_EMAIL,
      subject: `Message de contact de ${name}`,
      html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong> ${message}</p>
      `,
    });

    // Optionnel : envoi de confirmation au client
    await resend.emails.send({
      from: "Contact Site <onboarding@resend.dev>",
      to: email,
      subject: "Nous avons bien reçu votre message",
      html: `
        <p>Bonjour ${name},</p>
        <p>Merci pour votre message, nous vous répondrons sous 1h pendant les horaires d'ouverture.</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("CONTACT API ERROR:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}