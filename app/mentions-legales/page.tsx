export const metadata = {
  title: "Mentions légales | Le Bistrot des Remparts",
  description:
    "Mentions légales et informations légales obligatoires du Bistrot des Remparts à Compiègne.",
  openGraph: {
    title: "Mentions légales | Le Bistrot des Remparts",
    description:
      "Mentions légales et informations légales obligatoires du Bistrot des Remparts à Compiègne.",
    url: "https://www.lebistrotdesremparts.com/mentions-legales",
    siteName: "Le Bistrot des Remparts",
    images: [
      {
        url: "/images/og-legal.jpg",
        width: 1200,
        height: 630,
        alt: "Mentions légales Le Bistrot des Remparts",
      },
    ],
    type: "website",
    locale: "fr_FR",
  },
};

export default function MentionsLegalesPage() {
  return (
    <main className="bg-neutral-950 text-neutral-100 pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-[var(--font-playfair)] mb-8 text-center">
          Mentions légales
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Éditeur du site*</h2>
          <p>
            Le Bistrot des Remparts* <br />
            12 Rue des Remparts, 60200 Compiègne <br />
            Tél. : 03 44 00 00 00
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Directeur de la publication</h2>
          <p>Thomas DAVILA</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Hébergeur</h2>
          <p>
            Netlify (ou Vercel selon hébergement) <br />
            30, avenue du Web, 75000 Paris
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Propriété intellectuelle</h2>
          <p>
            Tous les contenus (texte, images, logos) présents sur ce site sont la propriété
            exclusive du Bistrot des Remparts, sauf mentions contraires.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Données personnelles</h2>
          <p>
            Conformément à la loi Informatique et Libertés, vous disposez d’un droit d’accès,
            de modification et de suppression de vos données. Contactez-nous pour exercer vos droits.
          </p>
        </section>
      </div>
    </main>
  );
}
