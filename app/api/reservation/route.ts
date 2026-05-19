import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { z } from "zod";

const reservationSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8).optional(),
  date: z.string(),
  time: z.string(),
  guests: z.number().min(1),
  message: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Honeypot anti-spam
    if (body.website) {
      return NextResponse.json({}, { status: 400 });
    }

    // Validation Zod
    const parsed = reservationSchema.safeParse(body);

    if (!parsed.success) {
      console.log("ZOD ERROR:", parsed.error.flatten());
      console.log("BODY RECEIVED:", body);

      return NextResponse.json(
        { error: "Données invalides" },
        { status: 400 }
      );
    }

    const {
      name,
      email,
      phone,
      date,
      time,
      guests,
      message,
    } = parsed.data;

    // Vérification variables d'environnement
    if (
      !process.env.SUPABASE_URL ||
      !process.env.SUPABASE_SERVICE_ROLE_KEY ||
      !process.env.RESEND_API_KEY ||
      !process.env.RESTAURANT_EMAIL
    ) {
      throw new Error(
        "Missing environment variables"
      );
    }

    // Clients
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    const resend = new Resend(
      process.env.RESEND_API_KEY
    );

    // Vérifie doublon
    const { data: existing, error: selectError } =
      await supabase
        .from("reservations")
        .select("*")
        .eq("email", email)
        .eq("date", date)
        .eq("time", time);

    if (selectError) {
      console.error(
        "SUPABASE SELECT ERROR:",
        selectError
      );

      return NextResponse.json(
        { error: "Erreur base de données" },
        { status: 500 }
      );
    }

    if (existing && existing.length > 0) {
      return NextResponse.json(
        { error: "Réservation déjà existante" },
        { status: 400 }
      );
    }

    // Insertion réservation
    const { error: insertError } = await supabase
      .from("reservations")
      .insert([
        {
          name,
          email,
          phone,
          date,
          time,
          guests,
          message,
        },
      ]);

    if (insertError) {
      console.error(
        "SUPABASE INSERT ERROR:",
        insertError
      );

      return NextResponse.json(
        { error: "Erreur base de données" },
        { status: 500 }
      );
    }

    // Email client
    const clientEmail = await resend.emails.send({
      from:
        "Le Bistrot des Remparts <onboarding@resend.dev>",
      to: email,
      subject:
        "Confirmation de votre réservation",
      html: `
        <h2>Merci ${name} pour votre réservation</h2>

        <p>
          Votre réservation a bien été enregistrée.
        </p>

        <hr />

        <p><strong>Date :</strong> ${date}</p>
        <p><strong>Heure :</strong> ${time}</p>
        <p><strong>Nombre de personnes :</strong> ${guests}</p>

        ${
          phone
            ? `<p><strong>Téléphone :</strong> ${phone}</p>`
            : ""
        }

        ${
          message
            ? `<p><strong>Message :</strong> ${message}</p>`
            : ""
        }

        <hr />

        <p>
          Nous vous attendons avec plaisir au
          Bistrot des Remparts.
        </p>
      `,
    });

    console.log(
      "CLIENT EMAIL:",
      clientEmail
    );

    // Email restaurant
    const restaurantEmail =
      await resend.emails.send({
        from:
          "Réservation Site <onboarding@resend.dev>",
        to: process.env.RESTAURANT_EMAIL,
        subject: "Nouvelle réservation",
        html: `
          <h2>Nouvelle réservation</h2>

          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>

          <p>
            <strong>Téléphone :</strong>
            ${phone || "Non renseigné"}
          </p>

          <p><strong>Date :</strong> ${date}</p>
          <p><strong>Heure :</strong> ${time}</p>

          <p>
            <strong>Personnes :</strong>
            ${guests}
          </p>

          <p>
            <strong>Message :</strong>
            ${message || "Aucun"}
          </p>
        `,
      });

    console.log(
      "RESTAURANT EMAIL:",
      restaurantEmail
    );

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(
      "RESERVATION API ERROR:",
      error
    );

    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}