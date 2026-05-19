import Hero from "@/components/Hero"
import SocialProof from "@/components/SocialProof"
import MenuPreview from "@/components/MenuPreview"
import AmbianceSection from "@/components/AmbianceSection"
import ReviewSection from "@/components/ReviewSection"
import ReservationCTA from "@/components/ReservationCTA"
import FAQSection from "@/components/FAQSection"
import Script from "next/script";

export default function Home() {
  return (
    <>
  <Script
  id="restaurant-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "@id": "https://www.lebistrotdesremparts.com/#restaurant",
      name: "Le Bistrot des Remparts",
      url: "https://www.lebistrotdesremparts.com",
      image: "https://www.lebistrotdesremparts.com/images/restaurant-hero.jpg",
      telephone: "+33344000000",
      priceRange: "€€",
      servesCuisine: "French",
      acceptsReservations: "True",
      address: {
        "@type": "PostalAddress",
        streetAddress: "12 Rue des Remparts",
        addressLocality: "Compiègne",
        postalCode: "60200",
        addressCountry: "FR"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "49.4179",
        longitude: "2.8261"
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Tuesday","Wednesday","Thursday","Friday","Saturday"],
          opens: "12:00",
          closes: "14:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Tuesday","Wednesday","Thursday","Friday","Saturday"],
          opens: "19:00",
          closes: "22:00"
        }
      ],
      areaServed: {
        "@type": "City",
        name: "Compiègne"
      },
      hasMenu: "https://www.lebistrotdesremparts.com/menu",
      sameAs: [
        "https://www.facebook.com/lebistrotdesremparts",
        "https://www.instagram.com/lebistrotdesremparts"
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "127"
      }
    })
  }}
/>
    <main>
      <Hero />
      <SocialProof />
      <MenuPreview />
      <AmbianceSection />
      <ReviewSection />
      <FAQSection />
      <ReservationCTA />
    </main>
    </>
  );
}
<Script type="application/ld+json"></Script>