import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FAQSection from "@/components/FAQSection";
import { locations, defaultFAQs } from "@/lib/data";
import { locationImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "Escorts in All Mumbai Locations | Call Girls Near You | Zarina",
  description: "Find verified escorts near you across all Mumbai locations - Andheri, Bandra, Juhu, Colaba, Powai, Thane, Navi Mumbai and 100+ more areas. Book call girls 24/7.",
  alternates: { canonical: "https://hotzarina.in/location" },
  openGraph: {
    title: "Escorts in All Mumbai Locations | Call Girls Near You",
    description: "Find verified escorts near you across all Mumbai locations. Book call girls 24/7.",
    url: "https://hotzarina.in/location",
    siteName: "Hotzarina",
    locale: "en_IN",
    type: "website",
  },
};

export default function LocationPage() {
  const faqs = defaultFAQs('Mumbai');

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://hotzarina.in/location",
        name: "Escorts in All Mumbai Locations | Call Girls Near You",
        url: "https://hotzarina.in/location",
        description: "Find verified escorts near you across all Mumbai and India locations. 125+ areas covered.",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://hotzarina.in" },
            { "@type": "ListItem", position: 2, name: "All Locations", item: "https://hotzarina.in/location" },
          ],
        },
      },
      {
        "@type": "ItemList",
        name: "Escort Locations in Mumbai & India",
        itemListElement: locations.map((loc, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `Escorts in ${loc.name}`,
          url: `https://hotzarina.in/escorts-in-${loc.slug}`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Hero */}
      <section className="hero" style={{ background: "linear-gradient(rgba(128,0,128,0.8),rgba(128,0,128,0.8)), url('/images/escorts-in-mumbai-banner.webp') center/cover no-repeat" }}>
        <div className="container">
          <div className="hero-content">
            <h1>Escorts Near You - All Mumbai &amp; India Locations</h1>
            <p>Find premium verified escorts near you across 125+ locations including Mumbai, Andheri, Bandra, Juhu, Colaba, Thane, Navi Mumbai, Delhi, Bangalore, and all major Indian cities. 100% real profiles, instant booking, 24/7 availability.</p>
            <div className="hero-buttons">
              <a href="tel:+919038976363" className="btn btn-primary">📞 Call us at +91 90389 76363</a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="contact-instant">
        <div className="container">
          <h2>Find Verified Escorts in Your Location</h2>
          <p>Our escort service covers 125+ locations across Mumbai and India. Whether you&apos;re in South Mumbai, Western Suburbs, Central Mumbai, Navi Mumbai, or any other city, our verified call girls are just a call away. All profiles are genuine with real photos, and our companions are available 24/7 for both incall and outcall services.</p>
          <div className="contact-buttons">
            <a href="tel:+919038976363" className="btn btn-call">📞 Call Now</a>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="home-locations-section" aria-labelledby="locations-page-heading">
        <div className="container">
          <h2 id="locations-page-heading">All Available Escort Locations</h2>
          <p className="section-subtitle">Browse escorts available in your area. Click any location to see verified call girls near you with real photos and instant booking available.</p>
          <div className="locations-grid">
            {locations.map((loc) => (
              <div key={loc.slug} className="location-card">
                <Image
                  src={locationImage(loc.slug)}
                  alt={"Escorts in " + loc.name + " - Verified Call Girls " + loc.name}
                  width={350}
                  height={350}
                  loading="lazy"
                />
                <div className="location-info">
                  <h3 style={{ fontSize: '1rem', margin: '0.5rem 0', padding: '0 0.5rem' }}>{loc.name}</h3>
                  <p style={{ fontSize: '0.8rem', color: '#666', margin: '0 0 0.5rem', padding: '0 0.5rem' }}>{loc.state} &bull; ⭐ {loc.reviewCount} Reviews</p>
                  <Link href={"/escorts-in-" + loc.slug} className="btn-location" aria-label={"Book Escorts in " + loc.name}>Escorts in {loc.name}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about-section" aria-labelledby="location-about-heading">
        <div className="container">
          <h2 id="location-about-heading">Why Our Location Coverage Is Unmatched</h2>
          <div className="about-grid">
            <div className="about-item">
              <h3>125+ Locations Covered</h3>
              <p>Coverage across all Mumbai suburbs, satellite cities, and major Indian metros. Wherever you are, we have verified escorts near you with quick response times.</p>
            </div>
            <div className="about-item">
              <h3>Local Knowledge & Expertise</h3>
              <p>Our location-specific companions have deep local knowledge, discreet delivery to premium hotels and apartments, and understanding of local preferences.</p>
            </div>
            <div className="about-item">
              <h3>Outcall & Incall Available</h3>
              <p>Choose between incall (at companion&apos;s location) or outcall (at your hotel/home) services across all covered locations. Flexible arrangements for your comfort.</p>
            </div>
            <div className="about-item">
              <h3>Real-Time Availability</h3>
              <p>Our location-based companions update their availability in real-time. Call us to check current availability in your specific area and get instant confirmation.</p>
            </div>
            <div className="about-item">
              <h3>Safe & Verified</h3>
              <p>All companions across all locations go through our verification process. Regardless of your location, safety, authenticity, and professionalism are guaranteed.</p>
            </div>
            <div className="about-item">
              <h3>Quick Response</h3>
              <p>Location-based response within 15-30 minutes across all covered areas. We maintain a network of verified companions ready to serve you quickly wherever you are.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} location="Mumbai" />
    </main>
  );
}
