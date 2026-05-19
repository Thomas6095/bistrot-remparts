import type { Metadata } from "next";
import MenuClient from "@/components/MenuClient";

export const metadata: Metadata = {
  title: "Carte & Menu | Le Bistrot des Remparts - Restaurant à Compiègne",
  description:
    "Découvrez la carte du Bistrot des Remparts à Compiègne : entrées, plats et desserts faits maison à base de produits frais.",
    alternates: {
    canonical: "/menu"
  }
};

export default function MenuPage() {
  return <MenuClient />;
}


