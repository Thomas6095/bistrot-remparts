"use client";

import { motion } from "framer-motion";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import ReservationForm from "@/components/ReservationForm";
import { ToastProvider } from "@/components/ToastContext";
import ToastStack from "@/components/ToastStack";

export default function ReservationClient() {
  return (
    <ToastProvider>
      <main className="relative overflow-hidden bg-neutral-950 text-neutral-100 pt-28 md:pt-32 pb-24 px-4 sm:px-6 lg:px-10">

        {/* Glow arrière-plan */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.08),transparent_35%)] pointer-events-none" />

        {/* HERO */}
        <motion.section
          className="relative max-w-5xl mx-auto text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* Badge */}
          <div className="flex justify-center mb-6">

            <span className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm text-amber-400 backdrop-blur-xl">
              Réservation en ligne
            </span>

          </div>

          {/* Titre */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[var(--font-playfair)] text-white leading-tight mb-6">

            Réserver une table
            <span className="block text-amber-400 mt-2">
              à Compiègne
            </span>

          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-base md:text-lg text-neutral-400 leading-relaxed">
            Réservez votre expérience culinaire au
            Bistrot des Remparts et profitez d’une cuisine
            française raffinée dans une atmosphère élégante
            au cœur de Compiègne.
          </p>

          {/* Réassurance */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-neutral-300">

            <div className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-xl">
              ✔ Confirmation rapide
            </div>

            <div className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-xl">
              ✔ Réponse sous 1h
            </div>

            <div className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-xl">
              ✔ Aucun paiement requis
            </div>

          </div>

          {/* Téléphone */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >

            <a
              href="tel:+33643719052"
              className="
                inline-flex items-center gap-3
                rounded-2xl
                border border-white/10
                bg-white/[0.04]
                px-7 py-4
                text-white font-medium
                backdrop-blur-xl
                transition-all duration-300
                hover:border-amber-500/30
                hover:bg-white/[0.06]
                hover:shadow-[0_10px_40px_rgba(251,191,36,0.10)]
              "
            >
              <span className="text-amber-400 text-lg">
                📞
              </span>

              <span>
                06 43 71 90 52
              </span>
            </a>

          </motion.div>

        </motion.section>

        {/* FORMULAIRE */}
        <motion.section
          className="relative w-full max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <ReservationForm
            redirectOnSuccess="/reservation/confirmation"
          />

          {/* Toasts */}
          <div className="mt-6 relative z-50">
            <ToastStack />
          </div>

        </motion.section>

        {/* FOOT INFOS */}
        <motion.section
          className="max-w-5xl mx-auto mt-16 md:mt-20 lg:hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >

          <div className="grid md:grid-cols-2 gap-5">

            {/* Adresse */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">

              <p className="text-sm uppercase tracking-[0.2em] text-amber-400 mb-3">
                Adresse
              </p>

              <p className="text-white text-lg">
                12 Rue des Remparts
              </p>

              <p className="text-neutral-400 mt-1">
                60200 Compiègne
              </p>

            </div>

            {/* Horaires */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">

              <p className="text-sm uppercase tracking-[0.2em] text-amber-400 mb-3">
                Horaires
              </p>

              <p className="text-white text-lg">
                Mardi — Dimanche
              </p>

              <p className="text-neutral-400 mt-1">
                12h–14h30 / 19h–22h
              </p>

            </div>

          </div>

        </motion.section>

      </main>

      <MobileStickyCTA />
    </ToastProvider>
  );
}