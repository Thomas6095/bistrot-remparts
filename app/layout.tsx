import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import ClientLayout from "@/components/ClientLayout";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Le Bistrot des Remparts | Restaurant à Compiègne | Cuisine bistronomique & Réservation en ligne",
  description:
    "Restaurant bistronomique situé au cœur de Compiègne. Cuisine française maison, produits locaux et réservation en ligne rapide. Appelez ou réservez en quelques clics.",
    alternates: {
    canonical: "/"
  },
  keywords: [
    "restaurant Compiègne",
    "bistrot Compiègne",
    "réservation restaurant Compiègne",
    "restaurant centre-ville Compiègne",
    "cuisine française compiegne"
  ],
  openGraph: {
    title: "Le Bistrot des Remparts",
    description:
      "Restaurant bistronomique à Compiègne. Réservez votre table en ligne.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`bg-neutral-950 text-neutral-100 ${playfair.variable}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}






