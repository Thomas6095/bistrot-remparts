export default function ReservationConfirmation() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-neutral-950 text-white p-6">
      <h1 className="text-4xl font-[var(--font-playfair)] mb-4">Réservation confirmée !</h1>
      <p className="text-neutral-400 text-center mb-8">
        Merci ! Votre table a bien été réservée.
      </p>
      <a href="/" className="px-6 py-3 bg-amber-500 text-black font-semibold rounded-md hover:bg-amber-400 transition">
        Retour à l'accueil
      </a>
    </main>
  );
}
