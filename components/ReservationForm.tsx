"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "./ToastContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Props {
  redirectOnSuccess?: string;
}

export default function ReservationForm({
  redirectOnSuccess,
}: Props) {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    people: 2,
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const { addToast } = useToast();
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updatePeople = (type: "inc" | "dec") => {
    setFormData((prev) => ({
      ...prev,
      people:
        type === "inc"
          ? prev.people + 1
          : Math.max(1, prev.people - 1),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.nom,
          email: formData.email,
          phone: formData.phone || undefined,
          date: formData.date,
          time: formData.time,
          guests: formData.people,
          message: formData.message || undefined,
        }),
      });

      const data = await res.json();

      setLoading(false);

      if (!res.ok) {
        addToast(data.error || "Erreur serveur", "error");
        return;
      }

      if (redirectOnSuccess) {
        router.push(redirectOnSuccess);
      } else {
        addToast(
          "Réservation confirmée ! Nous vous contacterons rapidement.",
          "success"
        );

        setFormData({
          nom: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          people: 2,
          message: "",
        });
      }
    } catch {
      setLoading(false);

      addToast(
        "Erreur serveur, veuillez réessayer.",
        "error"
      );
    }
  };

  return (
    <section className="relative max-w-7xl mx-auto overflow-hidden rounded-[32px] border border-white/10 bg-neutral-950 shadow-[0_0_60px_rgba(251,191,36,0.06)]">

        {/* IMAGE FOND MOBILE */}
        <div className="absolute inset-0 lg:hidden">
          <Image
            src="/images/reservation.jpg"
            alt="Réservation restaurant à Compiègne"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Gradient premium */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-neutral-950" />
        </div>

        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_35%)] pointer-events-none z-[1]" />

        {/* Layout */}
        <div className="relative z-10 grid lg:grid-cols-[0.95fr_1.4fr] 2xl:grid-cols-[0.9fr_1.5fr]">

        {/* IMAGE / INFOS */}
        <div className="relative hidden lg:block min-h-full">

          <Image
            src="/images/reservation.jpg"
            alt="Réservation restaurant à Compiègne"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 flex h-full flex-col justify-between p-10 xl:p-12">

            <div>

              <span className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm text-amber-400 backdrop-blur-xl">
                Réservation premium
              </span>

              <h2 className="mt-6 text-4xl xl:text-5xl font-[var(--font-playfair)] text-white leading-tight">
                Réservez votre expérience gastronomique
              </h2>

              <p className="mt-6 text-lg text-neutral-300 leading-relaxed">
                Une cuisine française raffinée dans une
                atmosphère élégante au cœur de Compiègne.
              </p>

            </div>

            <div className="space-y-5">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.2em] text-amber-400 mb-2">
                  Horaires
                </p>

                <p className="text-neutral-200">
                  Mardi — Dimanche
                </p>

                <p className="text-neutral-400 text-sm">
                  12h–14h30 / 19h–22h
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.2em] text-amber-400 mb-2">
                  Adresse
                </p>

                <p className="text-neutral-200">
                  12 Rue des Remparts
                </p>

                <p className="text-neutral-400 text-sm">
                  60200 Compiègne
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* FORMULAIRE */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-14 xl:p-16 bg-black/0 lg:bg-transparent backdrop-blur-[2px] lg:backdrop-blur-0"
        >

          {/* HEADER */}
          <div className="mb-12">

            <span className="inline-flex items-center rounded-full border border-white/10 bg-black/40 lg:bg-white/[0.03] px-4 py-2 text-sm text-neutral-300 mb-6">
              Réservation en ligne
            </span>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-[var(--font-playfair)] text-white leading-tight mb-5">
              Réserver une table
            </h2>

            <p className="text-neutral-400 text-lg leading-relaxed max-w-xl">
              Réservez en quelques instants et profitez
              d’une expérience culinaire raffinée dans un
              cadre élégant au cœur de Compiègne.
            </p>

          </div>

          {/* FORM */}
          <div className="space-y-7 xl:space-y-8">

            {/* NOM */}
            <div>

              <label className="block text-sm text-neutral-300 mb-3">
                Nom complet
              </label>

              <input
                type="text"
                name="nom"
                required
                value={formData.nom}
                onChange={handleChange}
                placeholder="Votre nom"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-white placeholder:text-neutral-500 outline-none transition-all duration-300 focus:border-amber-500/50 focus:bg-white/[0.05]"
              />

            </div>

            {/* EMAIL */}
            <div>

              <label className="block text-sm text-neutral-300 mb-3">
                Adresse email
              </label>

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="contact@email.com"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-white placeholder:text-neutral-500 outline-none transition-all duration-300 focus:border-amber-500/50 focus:bg-white/[0.05]"
              />

            </div>

            {/* TELEPHONE */}
            <div>

              <label className="block text-sm text-neutral-300 mb-3">
                Téléphone
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="06 XX XX XX XX"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-white placeholder:text-neutral-500 outline-none transition-all duration-300 focus:border-amber-500/50 focus:bg-white/[0.05]"
              />

            </div>

            {/* DATE / HEURE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 min-w-0">

              {/* DATE */}
              <div className="min-w-0">

                <label className="block text-sm text-neutral-300 mb-3">
                  Date
                </label>

                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="
                    w-full min-w-0 rounded-2xl
                    border border-white/10
                    bg-white/[0.03]
                    px-4 sm:px-6 py-5
                    text-white
                    outline-none
                    transition-all duration-300
                    focus:border-amber-500/50
                  "
                />

              </div>

              {/* HEURE */}
              <div className="min-w-0">

                <label className="block text-sm text-neutral-300 mb-3">
                  Heure
                </label>

                <input
                  type="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="
                    w-full min-w-0 rounded-2xl
                    border border-white/10
                    bg-white/[0.03]
                    px-4 sm:px-6 py-5
                    text-white
                    outline-none
                    transition-all duration-300
                    focus:border-amber-500/50
                  "
                />

              </div>

            </div>

            {/* PERSONNES */}
            <div>

              <label className="block text-sm text-neutral-300 mb-3">
                Nombre de personnes
              </label>

              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5">

                <button
                  type="button"
                  onClick={() => updatePeople("dec")}
                  className="h-11 w-11 rounded-full border border-white/10 text-white transition hover:border-amber-500 hover:text-amber-400"
                >
                  −
                </button>

                <span className="text-lg font-medium text-white">
                  {formData.people} personne
                  {formData.people > 1 ? "s" : ""}
                </span>

                <button
                  type="button"
                  onClick={() => updatePeople("inc")}
                  className="h-11 w-11 rounded-full border border-white/10 text-white transition hover:border-amber-500 hover:text-amber-400"
                >
                  +
                </button>

              </div>

            </div>

            {/* MESSAGE */}
            <div>

              <label className="block text-sm text-neutral-300 mb-3">
                Message (facultatif)
              </label>

              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Allergies, occasion spéciale, demande particulière..."
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-white placeholder:text-neutral-500 outline-none transition-all duration-300 focus:border-amber-500/50 focus:bg-white/[0.05]"
              />

            </div>

            {/* CTA */}
            <motion.button
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              type="submit"
              className={`
                w-full rounded-2xl py-5 text-lg font-semibold transition-all duration-300
                ${
                  loading
                    ? "bg-neutral-800 text-neutral-500"
                    : "bg-amber-500 text-black hover:bg-amber-400 hover:shadow-[0_10px_40px_rgba(251,191,36,0.35)]"
                }
              `}
            >
              {loading
                ? "Réservation en cours..."
                : "Confirmer ma réservation"}
            </motion.button>

          </div>

        </motion.form>

      </div>
    </section>
  );
}