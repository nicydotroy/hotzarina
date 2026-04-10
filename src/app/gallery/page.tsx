import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EscortsGrid from "@/components/EscortsGrid";
import FAQSection from "@/components/FAQSection";
import { defaultFAQs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mumbai Escorts Gallery - Real Photos | Verified Call Girls | Zarina",
  description: "Browse real photos of verified Mumbai escorts. Genuine 100% real profiles of call girls in Mumbai. VIP companions, models, college girls gallery. Book 24/7.",
  keywords: ["mumbai escorts gallery", "call girls photos mumbai", "verified escorts photos", "real escorts photos mumbai", "escorts images mumbai"],
  alternates: { canonical: "https://hotzarina.in/gallery" },
  openGraph: {
    title: "Mumbai Escorts Gallery - Real Photos | Verified Call Girls",
    description: "Browse real verified photos of Mumbai escorts. 100% genuine profiles.",
    url: "https://hotzarina.in/gallery",
    siteName: "Hotzarina",
    locale: "en_IN",
    type: "website",
  },
};

const galleryEscorts = [
  { name: 'Zarina', slug: 'zarina', age: 24, location: 'Andheri, Mumbai', type: 'VIP Escort', rating: 4.9 },
  { name: 'Aarohi', slug: 'aarohi', age: 22, location: 'Bandra, Mumbai', type: 'Model Escort', rating: 4.8 },
  { name: 'Aishani', slug: 'aishani', age: 23, location: 'Juhu, Mumbai', type: 'Independent', rating: 4.9 },
  { name: 'Amayra', slug: 'amayra', age: 21, location: 'Colaba, Mumbai', type: 'College Girl', rating: 4.7 },
  { name: 'Anahita', slug: 'anahita', age: 25, location: 'Powai, Mumbai', type: 'High Profile', rating: 5.0 },
  { name: 'Avisha', slug: 'avisha', age: 23, location: 'Worli, Mumbai', type: 'Model Escort', rating: 4.8 },
  { name: 'Charvi', slug: 'charvi', age: 22, location: 'Dadar, Mumbai', type: 'Russian Style', rating: 4.9 },
  { name: 'Devanshi', slug: 'devanshi', age: 24, location: 'Lower Parel', type: 'Air Hostess', rating: 4.8 },
  { name: 'Eshanya', slug: 'eshanya', age: 21, location: 'Versova, Mumbai', type: 'College Girl', rating: 4.7 },
  { name: 'Hrishita', slug: 'hrishita', age: 26, location: 'Andheri, Mumbai', type: 'VIP Escort', rating: 5.0 },
  { name: 'Inayat', slug: 'inayat', age: 23, location: 'Bandra, Mumbai', type: 'Celebrity', rating: 4.9 },
  { name: 'Ishwarya', slug: 'ishwarya', age: 24, location: 'Borivali, Mumbai', type: 'Independent', rating: 4.8 },
  { name: 'Kashmira', slug: 'kashmira', age: 25, location: 'Thane, Mumbai', type: 'High Profile', rating: 5.0 },
  { name: 'Lavanya', slug: 'lavanya', age: 22, location: 'Navi Mumbai', type: 'Model Escort', rating: 4.8 },
  { name: 'Manisha', slug: 'manisha', age: 23, location: 'Santacruz', type: 'Independent', rating: 4.9 },
  { name: 'Natasha', slug: 'natasha', age: 21, location: 'Malad, Mumbai', type: 'College Girl', rating: 4.7 },
  { name: 'Nayantara', slug: 'nayantara', age: 27, location: 'Lokhandwala', type: 'Celebrity', rating: 5.0 },
  { name: 'Raima', slug: 'raima', age: 22, location: 'Oshiwara, Mumbai', type: 'Model Escort', rating: 4.8 },
  { name: 'Saanvi', slug: 'saanvi', age: 24, location: 'Khar, Mumbai', type: 'VIP Escort', rating: 4.9 },
  { name: 'Shivanya', slug: 'shivanya', age: 23, location: 'Goregaon', type: 'Independent', rating: 4.8 },
];

export default function GalleryPage() {
  const faqs = defaultFAQs('Mumbai');
  return (
    <main>
      {/* Hero */}
      <section className="hero" style={{ background: "linear-gradient(rgba(128,0,128,0.8),rgba(128,0,128,0.8)), url('/images/escorts-in-mumbai-banner.webp') center/cover no-repeat" }}>
        <div className="container">
          <div className="hero-content">
            <h1>Mumbai Escorts Gallery - 100% Real &amp; Verified Photos</h1>
            <p>Browse our exclusive gallery of verified Mumbai escorts. All photos are genuine, recent, and unedited. What you see is exactly what you get - no fake profiles, no false advertising. Our 20+ premium companions are available 24/7 across Mumbai.</p>
            <div className="hero-buttons">
              <a href="tel:+919038976363" className="btn btn-primary">📞 Call us at +91 90389 76363</a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="home-locations-section" aria-labelledby="gallery-heading">
        <div className="container">
          <h2 id="gallery-heading">Our Verified Escort Companions Gallery</h2>
          <p className="section-subtitle">All photos are 100% real and recently taken. Our escorts undergo regular photo verification to ensure authenticity. Browse profiles, choose your companion, and book instantly.</p>
          <div className="locations-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
            {galleryEscorts.map((escort) => (
              <div key={escort.slug} className="location-card" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(128,0,128,0.15)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <Image
                    src={"/images/name/" + escort.slug + ".webp"}
                    alt={escort.name + " - Verified Escort in " + escort.location}
                    width={300}
                    height={400}
                    loading="lazy"
                    style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(128,0,128,0.9)', color: 'white', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600' }}>
                    ✔ Verified
                  </div>
                </div>
                <div className="location-info" style={{ padding: '1rem', textAlign: 'left' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#800080', margin: '0 0 0.25rem' }}>{escort.name}</h3>
                  <p style={{ fontSize: '0.8rem', color: '#666', margin: '0 0 0.25rem' }}>Age: {escort.age} &bull; {escort.type}</p>
                  <p style={{ fontSize: '0.8rem', color: '#888', margin: '0 0 0.75rem' }}>📍 {escort.location}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <span style={{ color: '#f59e0b', fontSize: '0.9rem' }}>{'★'.repeat(Math.floor(escort.rating))}</span>
                    <span style={{ fontSize: '0.8rem', color: '#666' }}>{escort.rating}/5.0</span>
                  </div>
                  <a href="tel:+919038976363" className="btn-location" style={{ display: 'block', textAlign: 'center' }}>Book {escort.name}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Escorts Grid */}
      <EscortsGrid location="Mumbai" title="Book Any of Our Mumbai Escorts Today" subtitle="All companions shown are available for immediate booking. Call us now to confirm availability and make your reservation." />

      {/* Photo Authenticity Section */}
      <section className="contact-instant" aria-labelledby="gallery-auth-heading">
        <div className="container">
          <h2 id="gallery-auth-heading">100% Photo Authenticity Guaranteed</h2>
          <p>Every photo in our gallery is personally verified and recently taken. We have a strict no-fake-photos policy. Our verification team regularly checks all profiles to ensure the photos match exactly. When you book from our gallery, you get exactly what you see - guaranteed satisfaction or your money back.</p>
          <div className="contact-buttons">
            <a href="tel:+919038976363" className="btn btn-call">📞 Call to Book Now</a>
            <a href="https://wa.me/919038976363" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">💬 WhatsApp Us</a>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} location="Mumbai" />
    </main>
  );
}
