import Image from "next/image";

const reviews = [
  {
    name: "Jean D.",
    photo: "/images/client1.jpg",
    rating: 5,
    text: "Cuisine exceptionnelle et service impeccable !",
  },
  {
    name: "Marie L.",
    photo: "/images/client2.jpg",
    rating: 4,
    text: "Ambiance agréable, plats délicieux et originaux.",
  },
  {
    name: "Paul R.",
    photo: "/images/client3.jpg",
    rating: 5,
    text: "Une expérience gustative inoubliable à Compiègne.",
  },
];

export default function ReviewSection() {
  return (
    <section className="relative mt-24 overflow-hidden bg-neutral-950 py-24">

      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.08),transparent_40%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">

          <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm tracking-widest uppercase mb-5">
            Avis clients
          </span>

          <h2 className="text-3xl md:text-5xl font-[var(--font-playfair)] text-white mb-4">
            Ce que disent nos clients
          </h2>

          <p className="text-neutral-400 max-w-2xl mx-auto">
            Une expérience gastronomique appréciée par nos visiteurs à Compiègne.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {reviews.map((r, i) => (
            <div
              key={i}
              className="
                group relative overflow-hidden
                rounded-3xl border border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
                transition-all duration-500
                hover:border-amber-500/30
                hover:bg-white/[0.05]
                hover:-translate-y-1
              "
            >

              {/* Glow hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.08),transparent_50%)]" />

              <div className="relative z-10 flex flex-col items-center text-center">

                <div className="relative w-20 h-20 mb-5 overflow-hidden rounded-full border border-white/10">
                  <Image
                    src={r.photo}
                    alt={r.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex gap-1 mb-4 text-amber-400 text-lg">
                  {"★".repeat(r.rating)}
                </div>

                <p className="text-neutral-300 italic leading-relaxed">
                  “{r.text}”
                </p>

                <span className="mt-5 text-white font-semibold">
                  {r.name}
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}