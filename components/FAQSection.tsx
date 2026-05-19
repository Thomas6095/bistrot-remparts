"use client";

import { useState } from "react";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Où manger au centre-ville de Compiègne ?",
    answer:
      "Le Bistrot des Remparts est situé au cœur de Compiègne, à quelques pas du château. Nous proposons une cuisine française maison dans un cadre élégant et chaleureux.",
  },
  {
    question: "Faut-il réserver pour venir au restaurant ?",
    answer:
      "Nous recommandons fortement de réserver, notamment le week-end. Vous pouvez réserver directement en ligne en quelques clics.",
  },
  {
    question: "Proposez-vous des repas pour anniversaire ou événements privés ?",
    answer:
      "Oui, nous proposons la privatisation de la salle pour anniversaires, repas d’entreprise et événements privés à Compiègne.",
  },
  {
    question: "Le restaurant est-il proche du Château de Compiègne ?",
    answer:
      "Oui, notre établissement se situe à quelques minutes à pied du château de Compiègne.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section className="relative py-28 bg-neutral-950 overflow-hidden">

        {/* Glow background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.08),transparent_50%)] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] text-white mb-4">
              Questions fréquentes
            </h2>
            <p className="text-neutral-400">
              Tout ce que vous devez savoir avant votre visite au Bistrot des Remparts
            </p>
          </div>

          {/* FAQ */}
          <div className="space-y-4">

            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  className="border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >

                  {/* Question */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-white/5 transition"
                  >
                    <span className="text-white font-medium text-lg">
                      {faq.question}
                    </span>

                    <span className="text-amber-400 text-xl">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-5 text-neutral-400 leading-relaxed"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}

          </div>

          {/* CTA discret */}
          <div className="text-center mt-16">
            <p className="text-neutral-500 text-sm">
              Une autre question ? Contactez-nous directement ou réservez votre table.
            </p>
          </div>

        </div>
      </section>

      {/* Schema FAQ SEO (très important → garder intact) */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}