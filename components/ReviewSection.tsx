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
    <section className="max-w-5xl mx-auto mt-24 px-6 pb-24">
      <h2 className="text-3xl font-[var(--font-playfair)] mb-8 text-center">
        Ce que disent nos clients
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <div key={i} className="bg-neutral-900 rounded-lg p-6 shadow-lg flex flex-col items-center">
            <img src={r.photo} alt={r.name} className="w-20 h-20 rounded-full mb-4"/>
            <div className="flex gap-1 mb-2">
              {"⭐".repeat(r.rating)}
            </div>
            <p className="text-center text-neutral-300 italic">"{r.text}"</p>
            <span className="mt-2 font-semibold">{r.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}