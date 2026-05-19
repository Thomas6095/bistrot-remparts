"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AmbianceSection() {
  return (
    <section className="relative py-20 md:py-28 bg-neutral-950 overflow-hidden">

      {/* Glow arrière-plan (réduit sur mobile) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.08),transparent_50%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* GRID → STACK MOBILE */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* CONTENU */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            {/* Badge */}
            <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 text-xs sm:text-sm tracking-wide mb-5 backdrop-blur-md">
              Restaurant bistronomique à Compiègne
            </span>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[var(--font-playfair)] text-white leading-tight mb-6 md:mb-8">
              Une cuisine française raffinée au cœur de Compiègne
            </h2>

            {/* Citation */}
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 italic leading-relaxed mb-8 border-l-2 border-amber-500 pl-4 sm:pl-6">
              “Une expérience culinaire élégante pensée pour le plaisir des sens.”
            </p>

            {/* TEXTES → plus compact mobile */}
            <div className="space-y-5 sm:space-y-6 text-neutral-400 leading-relaxed text-base sm:text-lg">

              <p>
                Situé au cœur du centre-ville, notre restaurant à Compiègne vous accueille
                dans une atmosphère chaleureuse et raffinée, à quelques pas du château.
              </p>

              <p>
                Cuisine française maison, produits frais et saisonniers issus de producteurs locaux de l’Oise.
              </p>

              <p>
                Idéal pour un déjeuner d’affaires, un dîner romantique ou un repas en famille.
              </p>

              <p>
                Une carte évolutive, bistronomique et créative, inspirée des saisons.
              </p>

              <p>
                À proximité du château de Compiègne, parfait pour une expérience culturelle et gastronomique.
              </p>

            </div>

            {/* TAGS → scroll mobile propre */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-8 sm:mt-10">

              {[
                "Produits frais",
                "Cuisine maison",
                "Centre-ville",
                "Proche château",
                "Local",
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-neutral-300 backdrop-blur-md"
                >
                  {item}
                </span>
              ))}

            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative mt-10 lg:mt-0"
          >

            {/* Glow */}
            <div className="absolute -inset-3 sm:-inset-4 bg-amber-500/10 blur-2xl sm:blur-3xl rounded-full" />

            {/* Image container */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl">

              <Image
                src="/images/restaurant-interior.jpg"
                alt="Restaurant gastronomique à Compiègne"
                width={700}
                height={900}
                className="
                  object-cover 
                  object-[center_35%]
                  w-full 
                  h-[420px]
                  sm:h-[520px]
                  lg:h-[650px]
                  hover:scale-105 
                  transition-transform 
                  duration-700
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating card → réduit mobile */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6">

                <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-amber-400 mb-1 sm:mb-2">
                  Le Bistrot des Remparts
                </p>

                <p className="text-white text-sm sm:text-lg leading-relaxed">
                  Une adresse élégante pour découvrir une cuisine française moderne à Compiègne.
                </p>

              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}