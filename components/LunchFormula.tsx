"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function LunchFormula() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 mb-16 bg-neutral-900 text-white relative overflow-hidden">

      {/* Glow subtil en fond */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Badge premium */}
        <span className="inline-block mb-4 px-4 py-1 text-xs tracking-widest uppercase bg-amber-500 text-black font-semibold rounded-full">
          Disponible en semaine
        </span>

        {/* Titre */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-[var(--font-playfair)] mb-4 sm:mb-6">
          Formule du Midi
        </h2>

        {/* Sous-titre marketing */}
        <p className="text-neutral-400 mb-8 sm:mb-12 max-w-xl mx-auto text-sm sm:text-base">
          Une sélection raffinée renouvelée chaque semaine, élaborée à partir de produits frais et de saison.
        </p>

        {/* Carte élégante */}
        <div className="relative bg-neutral-950/80 backdrop-blur-md border border-neutral-800 rounded-3xl p-8 sm:p-12 shadow-2xl hover:shadow-amber-500/10 transition-all duration-500">

          {/* Grille des formules */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mt-6 text-lg">
            <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center">
              <p className="text-neutral-300 tracking-wide">Entrée + Plat</p>
              <p className="text-amber-500 text-3xl sm:text-4xl font-semibold mt-2 sm:mt-3">24€</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center">
              <p className="text-neutral-300 tracking-wide">Plat + Dessert</p>
              <p className="text-amber-500 text-3xl sm:text-4xl font-semibold mt-2 sm:mt-3">22€</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center">
              <p className="text-neutral-300 tracking-wide">Entrée + Plat + Dessert</p>
              <p className="text-amber-500 text-3xl sm:text-4xl font-semibold mt-2 sm:mt-3">29€</p>
            </motion.div>
          </div>

          {/* CTA élégant */}
          <div className="mt-12 sm:mt-16 flex justify-center">
            <Link
              href="/reservation"
              className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-amber-500 text-black font-semibold rounded-xl hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-amber-500/40"
            >
              Réserver une table
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

