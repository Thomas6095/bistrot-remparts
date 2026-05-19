"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "./ToastContext";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const { addToast } = useToast();

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

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      setLoading(false);

      if (!res.ok) {
        addToast(
          data.error || "Erreur lors de l'envoi",
          "error"
        );

        return;
      }

      addToast(
        "Message envoyé ! Nous vous répondrons rapidement.",
        "success"
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

    } catch {
      setLoading(false);

      addToast(
        "Erreur serveur, veuillez réessayer.",
        "error"
      );
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="space-y-7"
    >

      {/* Honeypot */}
      <div className="hidden">
        <input
          type="text"
          name="website"
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      {/* NOM */}
      <div>

        <label className="block text-sm text-neutral-300 mb-3">
          Nom complet
        </label>

        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Votre nom"
          className="
            w-full
            rounded-2xl
            border border-white/10
            bg-black/30 lg:bg-white/[0.03]
            px-6 py-5
            text-white
            placeholder:text-neutral-500
            outline-none
            transition-all duration-300
            focus:border-amber-500/50
            focus:bg-white/[0.05]
          "
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
          className="
            w-full
            rounded-2xl
            border border-white/10
            bg-black/30 lg:bg-white/[0.03]
            px-6 py-5
            text-white
            placeholder:text-neutral-500
            outline-none
            transition-all duration-300
            focus:border-amber-500/50
            focus:bg-white/[0.05]
          "
        />

      </div>

      {/* TELEPHONE */}
      <div>

        <label className="block text-sm text-neutral-300 mb-3">
          Téléphone (facultatif)
        </label>

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="06 00 00 00 00"
          className="
            w-full
            rounded-2xl
            border border-white/10
            bg-black/30 lg:bg-white/[0.03]
            px-6 py-5
            text-white
            placeholder:text-neutral-500
            outline-none
            transition-all duration-300
            focus:border-amber-500/50
            focus:bg-white/[0.05]
          "
        />

      </div>

      {/* SUJET */}
      <div>

        <label className="block text-sm text-neutral-300 mb-3">
          Sujet
        </label>

        <input
          type="text"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          placeholder="Votre demande"
          className="
            w-full
            rounded-2xl
            border border-white/10
            bg-black/30 lg:bg-white/[0.03]
            px-6 py-5
            text-white
            placeholder:text-neutral-500
            outline-none
            transition-all duration-300
            focus:border-amber-500/50
            focus:bg-white/[0.05]
          "
        />

      </div>

      {/* MESSAGE */}
      <div>

        <label className="block text-sm text-neutral-300 mb-3">
          Votre message
        </label>

        <textarea
          name="message"
          rows={6}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Décrivez votre demande, réservation ou événement..."
          className="
            w-full
            rounded-2xl
            border border-white/10
            bg-black/30 lg:bg-white/[0.03]
            px-6 py-5
            text-white
            placeholder:text-neutral-500
            outline-none
            transition-all duration-300
            focus:border-amber-500/50
            focus:bg-white/[0.05]
            resize-none
          "
        />

      </div>

      {/* CTA */}
      <motion.button
        whileTap={{ scale: 0.98 }}
        disabled={loading}
        type="submit"
        className={`
          w-full
          rounded-2xl
          py-5
          text-lg
          font-semibold
          transition-all duration-300
          ${
            loading
              ? "bg-neutral-800 text-neutral-500"
              : "bg-amber-500 text-black hover:bg-amber-400 hover:shadow-[0_10px_40px_rgba(251,191,36,0.35)]"
          }
        `}
      >

        {loading
          ? "Envoi en cours..."
          : "Envoyer le message"}

      </motion.button>
      
    </motion.form>
  );
}