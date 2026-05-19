import Link from "next/link";
import { LucideFacebook, LucideInstagram, LucideLinkedin } from "lucide-react"; // si tu veux des icônes

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Logo / Nom */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-[var(--font-playfair)] text-white mb-2">
            Le Bistrot des Remparts
          </h2>
          <p className="text-sm">
            Cuisine authentique & produits frais à Compiègne
          </p>
        </div>

        {/* Navigation rapide */}
        <div className="text-center">
          <h3 className="font-semibold mb-2">Navigation</h3>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:text-amber-500">Accueil</Link></li>
            <li><Link href="/menu" className="hover:text-amber-500">Menu</Link></li>
            <li><Link href="/reservation" className="hover:text-amber-500">Réservation</Link></li>
            <li><Link href="/mentions-legales" className="hover:text-amber-500">Mentions légales</Link></li>
          </ul>
        </div>

        {/* Infos & réseaux sociaux */}
        <div className="text-center md:text-right">
          <h3 className="font-semibold mb-2">Contact</h3>
          <p>📍 12 Rue des Remparts, 60200 Compiègne</p>
          <p>📞 06 43 71 90 52</p>
          <p>🕒 Mar-Sam: 12h-14h / 19h-22h</p>
          <div className="flex justify-center md:justify-end gap-4 mt-2">
            <a href="#" className="hover:text-amber-500"><LucideFacebook /></a>
            <a href="#" className="hover:text-amber-500"><LucideInstagram /></a>
            <a href="#" className="hover:text-amber-500"><LucideLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-neutral-600">
        &copy; {new Date().getFullYear()} Le Bistrot des Remparts. Tous droits réservés.
      </div>
    </footer>
  );
}

