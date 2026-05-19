"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function MobileStickyCTA() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-neutral-800 p-4 flex justify-between gap-4 md:hidden z-50">
      
      {/* Bouton Appel */}
      <a
        href="tel:+33344000000"
        className="flex-1 text-center bg-neutral-800 text-white py-3 rounded-lg font-semibold hover:bg-neutral-700 transition"
      >
        📞 Appeler
      </a>

      {/* Bouton Réserver (masqué si déjà sur page réservation) */}
      {pathname !== "/reservation" && (
        <Link
          href="/reservation"
          className="flex-1 text-center bg-amber-500 text-black py-3 rounded-lg font-semibold hover:bg-amber-400 transition"
        >
          📅 Réserver
        </Link>
      )}
    </div>
  );
}
