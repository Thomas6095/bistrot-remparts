export default function SocialProof() {
  return (
    <section className="py-12 bg-neutral-900 text-center">
      {/* Avis principaux */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-6">
        {/* Google */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <img src="/icons/google.svg" alt="Google" className="w-6 h-6" />
            <span className="font-semibold text-amber-500">⭐ 4.8/5</span>
          </div>
          <p className="text-neutral-400 text-sm">127 avis Google</p>
        </div>

        {/* TripAdvisor */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <img src="/icons/tripadvisor.svg" alt="TripAdvisor" className="w-6 h-6" />
            <span className="font-semibold text-amber-500">⭐ 4.7/5</span>
          </div>
          <p className="text-neutral-400 text-sm">98 avis TripAdvisor</p>
        </div>
      </div>
  <p className="text-neutral-400 text-sm mt-2">
    Classé parmi les restaurants préférés à Compiègne
  </p>
</section>
    );
}