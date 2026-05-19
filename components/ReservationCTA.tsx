"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ReservationCTA() {
  return (
    <section className="relative py-24 bg-amber-500 text-black overflow-hidden">
      
      {/* léger overlay décoratif */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,black,transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        {/* Badge */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold tracking-widest uppercase mb-4"
        >
          Réservation en ligne
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-[var(--font-playfair)] leading-tight mb-6"
        >
          Réservez votre table au Bistrot des Remparts
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-black/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          Cuisine bistronomique à Compiègne • Produits frais • Carte de saison •
          Service soigné
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/reservation"
            className="px-10 py-4 bg-black text-white font-semibold rounded-lg
                       hover:bg-neutral-900 hover:shadow-xl
                       transition-all duration-300"
          >
            Réserver une table
          </Link>

          <Link
            href="/menu"
            className="px-10 py-4 border border-black/30 text-black font-semibold rounded-lg
                       hover:bg-black hover:text-white
                       transition-all duration-300"
          >
            Voir la carte
          </Link>
        </motion.div>

        {/* micro trust line */}
        <p className="mt-8 text-sm text-black/70">
          Confirmation immédiate • Annulation flexible • Service midi & soir
        </p>
      </div>
    </section>
  );
}