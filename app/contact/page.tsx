import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { ToastProvider } from "@/components/ToastContext";
import ToastStack from "@/components/ToastStack";

export const metadata: Metadata = {
  title: "Contact | Le Bistrot des Remparts à Compiègne",
  description:
    "Contactez Le Bistrot des Remparts à Compiègne pour toute réservation ou information. Adresse, téléphone et formulaire de contact.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
      <main className="relative overflow-hidden bg-neutral-950 text-neutral-100 pt-32 pb-24 px-4 sm:px-6 lg:px-10">

      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.08),transparent_45%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-14">

          <span className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm text-amber-400 backdrop-blur-xl mb-6">
            Contact & Réservation
          </span>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-[var(--font-playfair)] text-white mb-6">
            Contactez-nous
          </h1>

          <p className="text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Une question, une réservation ou une demande particulière ?
            Nous vous répondons rapidement pendant nos horaires d’ouverture.
          </p>

        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-[0.9fr_1.3fr] gap-10 items-start">

          {/* INFOS */}
          <div className="space-y-6">

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6">

              <p className="text-sm uppercase tracking-[0.2em] text-amber-400 mb-3">
                Adresse
              </p>

              <p className="text-white text-lg">
                12 Rue des Remparts
              </p>

              <p className="text-neutral-400">
                60200 Compiègne
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6">

              <p className="text-sm uppercase tracking-[0.2em] text-amber-400 mb-3">
                Téléphone
              </p>

              <a
                href="tel:+33643719052"
                className="text-white text-lg hover:text-amber-400 transition"
              >
                06 43 71 90 52
              </a>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6">

              <p className="text-sm uppercase tracking-[0.2em] text-amber-400 mb-3">
                Email
              </p>

              <a
                href="mailto:thomas.davila@outlook.fr"
                className="text-white hover:text-amber-400 transition break-all"
              >
                thomas.davila@outlook.fr
              </a>

            </div>

            <div className="text-sm text-neutral-500">
              ✔ Réponse sous 1h pendant les horaires d’ouverture
            </div>

          </div>

            {/* Formulaire */}
            <div className="relative">
              <ContactForm />
              <div className="mt-4 relative z-50">
                <ToastStack />
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41543.01332724526!2d2.8546645!3d49.40061585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e7d5e621cbedd7%3A0x40af13e81644610!2s60200%20Compi%C3%A8gne!5e0!3m2!1sfr!2sfr!4v1779146096743!5m2!1sfr!2sfr"
              width="100%"
              height="350"
              loading="lazy"
              className="border-0"
            />
          </div>
        </div>
      </main>
  );
}