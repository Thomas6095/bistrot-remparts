"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { menu } from "@/data/menu";

type CategoryKey = "entrees" | "plats" | "desserts";

const categories = [
  { key: "entrees", label: "Entrées" },
  { key: "plats", label: "Plats" },
  { key: "desserts", label: "Desserts" },
];

export default function MenuPreview() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryKey>("entrees");

  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 bg-neutral-950 text-white">

      <div className="max-w-6xl mx-auto text-center">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[var(--font-playfair)] mb-4">
            Une carte de saison, pensée comme une expérience
          </h2>

          <p className="text-neutral-400 max-w-2xl mx-auto mb-10 text-sm sm:text-base">
            Entrées, plats et desserts élaborés à partir de produits frais,
            inspirés du terroir et de la cuisine bistronomique française.
          </p>
        </motion.div>

        {/* TABS (sans barre jaune) */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 sm:gap-3 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">

            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;

              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key as CategoryKey)}
                  className={`
                    px-5 sm:px-6 py-2 rounded-full text-sm sm:text-base
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-amber-500 text-black font-semibold shadow-md"
                        : "text-neutral-300 hover:text-white hover:bg-white/10"
                    }
                  `}
                >
                  {cat.label}
                </button>
              );
            })}

          </div>
        </div>

        {/* CONTENT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 md:gap-8"
          >

            {menu[activeCategory].map((item) => {

              const isSignature = item?.badges?.includes("Signature");

              return (
                <motion.article
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`
                    group bg-neutral-900 rounded-2xl overflow-hidden
                    border transition-all duration-300
                    hover:-translate-y-1
                    ${
                      isSignature
                        ? "border-amber-500/60 shadow-[0_0_30px_rgba(251,191,36,0.08)]"
                        : "border-white/5 hover:border-amber-500/20"
                    }
                  `}
                >

                  {/* IMAGE */}
                  <div className="relative h-52 sm:h-56 md:h-64 overflow-hidden">

                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="
                        object-cover
                        group-hover:scale-110
                        transition-transform duration-700
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    {/* BADGES */}
                    <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                      {item.badges?.map((badge: string) => (
                        <span
                          key={badge}
                          className={`
                            text-xs px-3 py-1 font-semibold rounded-full
                            ${
                              badge === "Signature"
                                ? "bg-amber-500 text-black"
                                : "bg-white/10 text-white border border-white/10"
                            }
                          `}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* CONTENT */}
                  <div className="p-5 sm:p-6 flex justify-between items-start gap-4 text-left">

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold group-hover:text-amber-400 transition-colors">
                        {item.name}
                      </h3>

                      <p className="text-sm text-neutral-400 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <span className="text-amber-400 font-semibold text-base sm:text-lg whitespace-nowrap">
                      {item.price.toFixed(2)}€
                    </span>

                  </div>

                </motion.article>
              );
            })}

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}