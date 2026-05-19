"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CategorySection from "./CategorySection";
import LunchFormula from "./LunchFormula";
import { menu, type MenuCategory } from "@/data/menu";

export default function MenuClient() {
  const [activeTab, setActiveTab] =
    useState<MenuCategory>("entrees");

  const tabs: {
    key: MenuCategory;
    label: string;
  }[] = [
    { key: "entrees", label: "Entrées" },
    { key: "plats", label: "Plats" },
    { key: "desserts", label: "Desserts" },
  ];

  return (
    <main className="bg-neutral-950 text-neutral-100 overflow-hidden">

      {/* HERO */}
      <section className="relative pt-36 pb-24 px-6">

        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.12),transparent_40%)] pointer-events-none" />

        <motion.div
          className="relative z-10 max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm text-amber-400 backdrop-blur-xl mb-6">
            Cuisine française • Produits frais
          </span>

          <h1 className="text-5xl md:text-7xl font-[var(--font-playfair)] leading-tight mb-6">
            Notre Carte
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Découvrez une cuisine française raffinée,
            élaborée à partir de produits frais et de
            saison dans une atmosphère élégante au cœur
            de Compiègne.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10 text-sm text-neutral-500">
            <span>✔ Fait maison</span>
            <span>✔ Produits locaux</span>
            <span>✔ Préparé à la commande</span>
          </div>

        </motion.div>
      </section>

      {/* FORMULE MIDI */}
      <LunchFormula />

      {/* NAVIGATION STICKY */}
      <section className="sticky top-20 z-30 backdrop-blur-xl bg-neutral-950/80 border-y border-white/5">

        <div className="max-w-5xl mx-auto px-6">

          <div className="flex justify-center gap-3 sm:gap-5 py-5 overflow-x-auto no-scrollbar">

            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`
                  px-6 py-3 rounded-2xl text-sm font-semibold
                  transition-all duration-300 whitespace-nowrap
                  ${
                    activeTab === tab.key
                      ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                      : "bg-white/[0.03] text-neutral-400 border border-white/10 hover:text-amber-400 hover:border-amber-500/30"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}

          </div>

        </div>

      </section>

      {/* MENU */}
      <section className="px-6 py-20">

        <div className="max-w-5xl mx-auto">

          <AnimatePresence mode="wait">

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.35 }}
            >

              <CategorySection
                id={activeTab}
                title={
                  tabs.find(
                    (t) => t.key === activeTab
                  )?.label || ""
                }
                items={menu[activeTab]}
              />

            </motion.div>

          </AnimatePresence>

          {/* ALLERGENES */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >

            <p
              className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-neutral-400"
              title="Liste complète disponible sur demande"
            >
              ⚠️ Liste des allergènes disponible sur demande
            </p>

          </motion.div>

        </div>

      </section>

      {/* PRODUITS LOCAUX + PDF */}
      <section className="px-6 pb-24">

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-6">

          {/* Produits locaux */}
          <motion.div
            className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <span className="text-sm uppercase tracking-[0.2em] text-amber-400">
              Produits locaux
            </span>

            <h3 className="text-3xl font-[var(--font-playfair)] mt-4 mb-5">
              Une cuisine authentique
            </h3>

            <p className="text-neutral-400 leading-relaxed">
              Nous collaborons avec des producteurs
              locaux de l’Oise afin de garantir fraîcheur,
              qualité et saisonnalité dans chacune de
              nos assiettes.
            </p>

          </motion.div>

          {/* PDF */}
          <motion.div
            className="rounded-[32px] border border-white/10 bg-amber-500 text-black p-8 flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >

            <div>

              <span className="text-sm uppercase tracking-[0.2em]">
                Carte PDF
              </span>

              <h3 className="text-3xl font-[var(--font-playfair)] mt-4 mb-5">
                Télécharger la carte
              </h3>

              <p className="text-black/70 leading-relaxed">
                Consultez notre carte complète au format
                PDF et découvrez toutes nos suggestions.
              </p>

            </div>

            <a
              href="/menu-le-bistrot-des-remparts.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-2xl bg-black px-6 py-4 text-white font-semibold hover:bg-neutral-900 transition"
            >
              📄 Télécharger
            </a>

          </motion.div>

        </div>

      </section>

      {/* CTA FINAL */}
      <section className="px-6 pb-32">

        <motion.div
          className="max-w-5xl mx-auto rounded-[40px] border border-white/10 bg-white/[0.03] p-10 md:p-16 text-center backdrop-blur-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <span className="text-sm uppercase tracking-[0.2em] text-amber-400">
            Réservation
          </span>

          <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] mt-5 mb-6">
            Prêt à vivre l’expérience ?
          </h2>

          <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Réservez votre table dès maintenant et
            profitez d’une cuisine raffinée dans une
            ambiance élégante et chaleureuse.
          </p>

          <motion.a
            href="/reservation"
            className="inline-flex items-center rounded-2xl bg-amber-500 px-8 py-5 text-lg font-semibold text-black hover:bg-amber-400 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(251,191,36,0.35)]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Réserver une table
          </motion.a>

        </motion.div>

      </section>

    </main>
  );
}
