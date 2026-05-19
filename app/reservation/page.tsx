// app/reservation/page.tsx
import ReservationClient from "./ReservationClient";

// Metadata côté serveur
export const metadata = {
  title: "Réserver une table à Compiègne | Le Bistrot des Remparts",
  description:
    "Réservez votre table en ligne au Bistrot des Remparts à Compiègne. Cuisine maison, produits frais, accueil chaleureux.",
    alternates: {
  canonical: "/reservation"
},
  openGraph: {
    title: "Réserver une table à Compiègne | Le Bistrot des Remparts",
    description:
      "Réservez votre table en ligne au Bistrot des Remparts à Compiègne. Cuisine maison, produits frais, accueil chaleureux.",
    url: "https://www.lebistrotdesremparts.com/reservation",
    siteName: "Le Bistrot des Remparts",
    images: [
      {
        url: "/images/og-reservation.jpg",
        width: 1200,
        height: 630,
        alt: "Réservation Le Bistrot des Remparts à Compiègne",
      },
    ],
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Réserver une table à Compiègne | Le Bistrot des Remparts",
    description:
      "Réservez votre table en ligne au Bistrot des Remparts à Compiègne. Cuisine maison, produits frais, accueil chaleureux.",
    images: ["/images/og-reservation.jpg"],
  },
};

export default function ReservationPage() {
  return <ReservationClient />;
}
