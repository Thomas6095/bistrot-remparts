"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: "Accueil", href: "/" },
    { label: "Carte", href: "/menu" },
    { label: "Réservation", href: "/reservation" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300
        ${scrolled ? "bg-black/90 backdrop-blur-md shadow-md" : "bg-black/60 backdrop-blur-sm"}`}
    >
      <Link
        href="/"
        className="text-xl md:text-2xl font-[var(--font-playfair)] text-white hover:text-amber-400 transition">
        Le Bistrot des Remparts
      </Link>

      {/* Desktop */}
      <motion.ul
        className="hidden md:flex gap-8 text-sm uppercase tracking-wider"
        initial="hidden"
        animate="visible"
        variants={fadeVariants}
        transition={{ duration: 0.4 }}
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`transition ${
                pathname === link.href
                  ? "text-amber-400"
                  : "hover:text-amber-400"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </motion.ul>

      {/* CTA Desktop */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="hidden md:inline-block"
      >
        <Link
          href="/reservation"
          className="px-5 py-2 bg-amber-500 text-black font-semibold rounded-md
          hover:bg-amber-400
          hover:shadow-[0_8px_25px_rgba(251,191,36,0.6)]
          transition-all duration-300">
          Réserver
        </Link>
      </motion.div>

      {/* Mobile */}
      <button
        className="md:hidden p-2 text-white"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md flex flex-col items-center py-6 space-y-4 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white uppercase font-medium hover:text-amber-400 transition"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/reservation"
                onClick={() => setMobileOpen(false)}
                className="px-6 py-2 bg-amber-500 text-black font-semibold rounded hover:bg-amber-400 transition"
              >
                Réserver
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}



