"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
      >
        <Image
          src="/images/restaurant-hero.jpg"
          alt="Restaurant bistronomique haut de gamme à Compiègne"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Premium overlays */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_90%,rgba(0, 0, 0, 0.38))]" />

      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.08),transparent_40%)]" />

      {/* Ambient glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen px-6 sm:px-10 lg:px-20">
        <div className="max-w-2xl pt-32 md:pt-20">

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-flex items-center gap-4 mb-8 px-5 py-3 rounded-full border border-white/10 bg-white/10 backdrop-blur-md shadow-lg"
          >
            {/* Avatars */}
            <div className="flex -space-x-3">
              <img
                src="/images/client1.jpg"
                alt="Client satisfait"
                className="w-10 h-10 rounded-full border-2 border-black object-cover"
              />
              <img
                src="/images/client2.jpg"
                alt="Client satisfait"
                className="w-10 h-10 rounded-full border-2 border-black object-cover"
              />
              <img
                src="/images/client3.jpg"
                alt="Client satisfait"
                className="w-10 h-10 rounded-full border-2 border-black object-cover"
              />
            </div>

            {/* Review text */}
            <div className="text-sm leading-tight">
              <p className="font-semibold text-white">
                ⭐ 4.8/5 — Plus de 120 avis
              </p>
              <p className="text-neutral-300">
                Recommandé à Compiègne
              </p>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-5xl sm:text-6xl lg:text-7xl font-[var(--font-playfair)] leading-[1.05] tracking-tight mb-8"
          >
            Une expérience{" "}
            <span className="text-amber-400">
              bistronomique
            </span>{" "}
            au cœur de Compiègne
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-xl mb-10"
          >
            Cuisine française raffinée, produits frais de saison
            et ambiance élégante à deux pas du château de Compiègne.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* Primary CTA */}
            <a
              href="/reservation"
              className="
                group
                inline-flex
                items-center
                justify-center
                px-8
                py-4
                rounded-xl
                bg-amber-500
                text-black
                font-semibold
                shadow-[0_10px_40px_rgba(251,191,36,0.25)]
                hover:bg-amber-400
                hover:-translate-y-1
                hover:shadow-[0_18px_50px_rgba(251,191,36,0.35)]
                active:scale-[0.98]
                transition-all
                duration-300
              "
            >
              Réserver une table
            </a>

            {/* Secondary CTA */}
            <a
              href="/menu"
              className="
                inline-flex
                items-center
                justify-center
                px-8
                py-4
                rounded-xl
                border
                border-white/15
                bg-white/5
                backdrop-blur-md
                text-white
                font-semibold
                hover:bg-white
                hover:text-black
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              Découvrir la carte
            </a>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.6,
            }}
            className="
              flex flex-wrap items-center gap-4
              mt-10
              pb-16 sm:pb-10 lg:pb-0
              text-sm text-neutral-400
            "
          >
            <span>Produits frais</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>Cuisine maison</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>Producteurs locaux</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 1,
        }}
        className="
          absolute
          bottom-2
          sm:bottom-4
          md:bottom-6
          lg:bottom-8
          left-1/2
          -translate-x-1/2
          z-20
        "
      >
        <div className="w-7 h-12 rounded-full border border-white/30 flex justify-center backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 rounded-full bg-white mt-3"
          />
        </div>
      </motion.div>
    </section>
  )
}