"use client";

import { motion } from "framer-motion";
import type { MenuItem } from "@/data/menu";
import Image from "next/image";

type CategorySectionProps = {
  id: string;
  title: string;
  items: MenuItem[];
};

export default function CategorySection({ title, items, id }: CategorySectionProps) {
  return (
    <section id={id} className="mb-16">
      <h2 className="text-3xl font-[var(--font-playfair)] mb-8 text-center">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className={`relative bg-neutral-900 rounded-xl overflow-hidden shadow-md transition-all duration-300
                        hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(251,191,36,0.5)] ${
                          item.featured ? "ring-2 ring-amber-400/40" : ""
                        }`}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Badge Plat Signature */}
            {item.featured && (
              <motion.span
                className="absolute top-3 left-3 bg-amber-500 text-black text-xs px-3 py-1 rounded-full font-semibold shadow-md"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                Plat Signature
              </motion.span>
            )}

            {/* Image avec glow subtil si featured */}
            {item.image && (
              <div className="relative">
                <Image
                  src={item.image}
                  alt={`${item.name} servi dans notre restaurant à Compiègne`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {item.featured && (
                  <motion.div
                    className="absolute inset-0 bg-amber-400/20 rounded-xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.3, 0] }} // pulser l'opacité
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop", // remplacer yoyo
                    }}
                  />
                )}
              </div>
            )}

            {/* Contenu */}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              {item.description && (
                <p className="text-neutral-400 mb-2 text-sm">{item.description}</p>
              )}
              <p className="font-bold text-amber-400 text-lg mt-2">{item.price} €</p>

              {/* Badges */}
              {item.badges && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {item.badges.map((badge, i) => (
                    <motion.span
                      key={i}
                      className="text-xs bg-amber-500 text-black px-2 py-1 rounded-full"
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 8px rgba(251,191,36,0.7)",
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      {badge}
                    </motion.span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}