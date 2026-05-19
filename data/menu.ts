export type MenuItem = {
  name: string
  price: number
  image: string
  badges?: string[]
  description?: string
  featured?: boolean
}

export type MenuCategory = "entrees" | "plats" | "desserts"

export const menu: Record<MenuCategory, MenuItem[]> = {
  entrees: [
    {
      name: "Salade de chèvre chaud",
      description: "Chèvre, miel, vinaigre balsamique, noix et mache fraîche",
      price: 8,
      image: "/images/chevre-chaud.jpg",
      badges: ["Fait maison", "Végétarien"],
    },
    {
      name: "Foie gras maison",
      description: "Chutney de figues & pain toasté",
      price: 18,
      image: "/images/foie-gras.jpg",
      badges: ["Fait maison", "Signature"],
      featured: true,
    },
    {
      name: "Burrata crémeuse",
      description: "Tomates anciennes & basilic frais",
      price: 14,
      image: "/images/burrata.jpg",
      badges: ["Végétarien"],
    },
  ],
  plats: [
    {
      name: "Magret de canard",
      description: "Purée maison & sauce miel",
      price: 26,
      image: "/images/magret.jpg",
      badges: ["Signature"],
      featured: true,
    },
    {
      name: "Boeuf Bourguignon",
      description: "Boeuf mijoté au vin rouge, légumes de saison",
      price: 18,
      image: "/images/boeuf-bourguignon.jpg",
      badges: ["Fait maison"],
    },
  ],
  desserts: [
    {
      name: "Tarte citron meringuée",
      description: "Zeste de citron vert",
      price: 9,
      image: "/images/tarte-citron.jpg",
      badges: ["Fait maison"],
    },
    {
      name: "Tarte Tatin",
      description: "Pommes caramélisées, pâte feuilletée maison",
      price: 7,
      image: "/images/tarte-tatin.jpg",
      badges: ["Fait maison"],
    },
  ],
};