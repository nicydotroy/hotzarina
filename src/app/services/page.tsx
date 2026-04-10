import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FAQSection from "@/components/FAQSection";
import { defaultFAQs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Escorts Services in Mumbai | VIP Call Girls 24/7 | Zarina",
  description: "Explore all premium escort services in Mumbai - VIP escorts, Russian escorts, college girls, model escorts, air hostess, and more. 100% verified call girls available 24/7.",
  keywords: ["escorts services mumbai", "vip escorts mumbai", "russian escorts mumbai", "college girls mumbai", "model escorts mumbai", "call girls service mumbai"],
  alternates: { canonical: "https://hotzarina.in/services" },
  openGraph: {
    title: "Escorts Services in Mumbai | VIP Call Girls 24/7",
    description: "Browse all premium escort services in Mumbai. 100% verified call girls available 24/7.",
    url: "https://hotzarina.in/services",
    siteName: "Hotzarina",
    locale: "en_IN",
    type: "website",
  },
};

const allServices = [
  { slug: 'vip-escorts', name: 'VIP Escorts Mumbai', description: 'Experience the pinnacle of luxury companionship with our VIP escorts in Mumbai. Our exclusive selection of premium companions caters to discerning clients seeking the finest experiences.', badge: '⭐ Premium', type: 'Elite', availability: '24/7', rating: '5.0★' },
  { slug: 'independent-escorts', name: 'Independent Escorts', description: 'Our independent escorts in Mumbai offer genuine, unfiltered companionship experiences. These self-managed professionals provide flexible scheduling and personalized services.', badge: '⭐ Featured', type: 'Solo', availability: '24/7', rating: '4.9★' },
  { slug: 'model-escorts', name: 'Model Escorts', description: 'Our model escorts in Mumbai combine stunning beauty with sophisticated companionship. These fashion-forward companions are perfect for high-profile events and exclusive gatherings.', badge: '⭐ Premium', type: 'Fashion', availability: '24/7', rating: '5.0★' },
  { slug: 'college-girls-escorts', name: 'College Girls', description: 'Meet our vivacious college girl escorts in Mumbai - young, energetic, and full of enthusiasm. These companions bring youthful charm and intellectual stimulation to every encounter.', badge: '⭐ Popular', type: 'Young', availability: 'Evening', rating: '4.8★' },
  { slug: 'russian-escorts', name: 'Russian Escorts', description: 'Indulge in the exotic allure of our Russian escorts in Mumbai. These stunning European companions bring international sophistication and unique cultural experiences.', badge: '⭐ Exotic', type: 'Foreign', availability: '24/7', rating: '5.0★' },
  { slug: 'high-profile-escorts', name: 'High Profile Escorts', description: 'Our high-profile escorts in Mumbai are refined, educated, and experienced in elite social circles. Perfect for corporate events, business dinners, and luxury gatherings.', badge: '⭐ Luxury', type: 'Elite', availability: '24/7', rating: '5.0★' },
  { slug: 'celebrity-escorts', name: 'Celebrity Escorts', description: 'Experience companionship with our celebrity-style escorts in Mumbai. These glamorous companions embody star-quality presence and are perfect for VIP events.', badge: '⭐ Exclusive', type: 'VIP', availability: 'On Request', rating: '5.0★' },
  { slug: 'house-wife-escorts', name: 'Housewife Escorts', description: 'Our housewife escorts in Mumbai offer warm, experienced companionship with the comfort and maturity of established women. Natural, genuine, and deeply satisfying encounters.', badge: '⭐ Mature', type: 'Experienced', availability: 'Daytime', rating: '4.9★' },
  { slug: 'air-hostess-escorts', name: 'Air Hostess Escorts', description: 'Experience the grace and professionalism of our air hostess escorts in Mumbai. These poised companions are trained in hospitality providing impeccable service.', badge: '⭐ Professional', type: 'Elite', availability: 'On Call', rating: '4.9★' },
  { slug: 'bollywood-actress-escorts', name: 'Bollywood Actress Escorts', description: 'Live out your Bollywood fantasy with our actress-style escorts in Mumbai. These glamorous companions channel the star power and charisma of Indian cinema.', badge: '⭐ Celebrity', type: 'VIP', availability: 'Limited', rating: '5.0★' },
  { slug: 'female-model-escorts', name: 'Female Model Escorts', description: 'Our professional female model escorts in Mumbai bring runway beauty and photogenic charm to every encounter. These sophisticated companions command attention and admiration.', badge: '⭐ Premium', type: 'Fashion', availability: '24/7', rating: '5.0★' },
  { slug: 'north-indian-escorts', name: 'North Indian Escorts', description: 'Experience the warmth and beauty of our North Indian escorts in Mumbai. These companions bring regional charm and cultural richness from Delhi, Punjab, Rajasthan, and UP.', badge: '⭐ Popular', type: 'Regional', availability: '24/7', rating: '4.8★' },
  { slug: 'south-indian-escorts', name: 'South Indian Escorts', description: 'Discover the elegance of our South Indian escorts in Mumbai. These beautiful companions from Tamil Nadu, Karnataka, Kerala, and Andhra Pradesh offer a unique cultural experience.', badge: '⭐ Featured', type: 'Regional', availability: '24/7', rating: '4.9★' },
  { slug: 'punjabi-escorts', name: 'Punjabi Escorts', description: 'Experience the vivacious spirit of our Punjabi escorts in Mumbai. Known for their bold personality, stunning looks, and warm nature, these companions bring Punjabi joie de vivre.', badge: '⭐ Popular', type: 'Regional', availability: '24/7', rating: '4.9★' },
  { slug: 'bengali-escorts', name: 'Bengali Escorts', description: 'Discover the artistic and intellectual charm of our Bengali escorts in Mumbai. Known for their cultural sophistication, literary sensibility, and elegant beauty.', badge: '⭐ Featured', type: 'Regional', availability: '24/7', rating: '4.8★' },
  { slug: 'marathi-escorts', name: 'Marathi Escorts', description: 'Experience authentic local connections with our Marathi escorts in Mumbai. These home-grown companions offer genuine Mumbai spirit, cultural understanding, and warm hospitality.', badge: '⭐ Local', type: 'Local', availability: '24/7', rating: '4.9★' },
  { slug: 'gujarati-escorts', name: 'Gujarati Escorts', description: 'Meet our charming Gujarati escorts in Mumbai. These vibrant companions from Gujarat bring regional beauty, warm hospitality, and a zest for life to every encounter.', badge: '⭐ Regional', type: 'Regional', availability: '24/7', rating: '4.8★' },
  { slug: 'role-play-escorts', name: 'Role Play Escorts', description: 'Explore your fantasies with our role-play escorts in Mumbai. These creative companions are skilled in various scenarios and help bring your imagination to life.', badge: '⭐ Special', type: 'Fantasy', availability: 'On Request', rating: '4.9★' },
  { slug: 'girlfriends-escorts', name: 'Girlfriend Experience', description: 'The ultimate Girlfriend Experience (GFE) in Mumbai. Our companions provide authentic, caring, and intimate interactions that replicate a genuine romantic relationship.', badge: '⭐ Popular', type: 'Intimate', availability: '24/7', rating: '5.0★' },
  { slug: 'bdsm-escorts', name: 'BDSM Escorts', description: 'Explore BDSM experiences with our specialized escorts in Mumbai. These skilled companions are trained in various BDSM practices ensuring safe, consensual, and thrilling encounters.', badge: '⭐ Special', type: 'Exotic', availability: 'On Request', rating: '4.9★' },
  { slug: 'hj-bj-escorts', name: 'HJ BJ Escorts', description: 'Our specialized HJ BJ escorts in Mumbai offer intimate services with professional expertise. Available 24/7 for discreet, comfortable, and satisfying encounters.', badge: '⭐ Premium', type: 'Special', availability: '24/7', rating: '4.8★' },
  { slug: 'horny-escorts', name: 'Horny Escorts', description: 'Our passionate and eager escorts in Mumbai are ready for incredible experiences. These enthusiastic companions bring genuine excitement and energy to every encounter.', badge: '⭐ Popular', type: 'Hot', availability: '24/7', rating: '4.9★' },
  { slug: 'jaat-escorts', name: 'Jaat Escorts', description: 'Experience the bold and confident charm of our Jaat escorts in Mumbai. These strong, beautiful companions from Haryana and Western UP bring a unique regional personality.', badge: '⭐ Regional', type: 'Regional', availability: '24/7', rating: '4.8★' },
  { slug: 'lesbian-escorts', name: 'Lesbian Escorts', description: 'Explore unique companionship experiences with our lesbian escorts in Mumbai. Available for couples and individuals seeking unique and fulfilling encounters.', badge: '⭐ Special', type: 'Fantasy', availability: 'On Request', rating: '5.0★' },
  { slug: 'marwadi-escorts', name: 'Marwadi Escorts', description: 'Discover the elegant beauty of our Marwadi escorts in Mumbai. These Rajasthani beauties bring traditional charm, vibrant personalities, and warm Rajasthani hospitality.', badge: '⭐ Regional', type: 'Regional', availability: '24/7', rating: '4.9★' },
  { slug: 'mumbai-escorts', name: 'Mumbai Escorts', description: 'Our premium Mumbai escorts service offers the best companionship in the city. Local expertise, genuine connections, and deep understanding of what Mumbai clients want.', badge: '⭐ Local', type: 'Local', availability: '24/7', rating: '5.0★' },
  { slug: 'muslim-escorts', name: 'Muslim Escorts', description: 'Our Muslim escorts in Mumbai offer unique cultural connections and beautiful companionship. These graceful companions provide authentic and deeply satisfying experiences.', badge: '⭐ Featured', type: 'Cultural', availability: '24/7', rating: '4.9★' },
  { slug: 'nepali-escorts', name: 'Nepali Escorts', description: 'Experience the natural beauty and warm personality of our Nepali escorts in Mumbai. These exotic companions from Nepal bring Himalayan charm and genuine warmth.', badge: '⭐ Exotic', type: 'Foreign', availability: '24/7', rating: '4.8★' },
  { slug: 'unsatisfied-bhabhi', name: 'Unsatisfied Bhabhi', description: 'Meet our mature bhabhi escorts in Mumbai looking for genuine connections. These experienced women provide authentic, passionate, and deeply satisfying companionship.', badge: '⭐ Mature', type: 'Experienced', availability: 'Daytime', rating: '5.0★' },
  { slug: 'unsatisfied-female', name: 'Unsatisfied Female Escorts', description: 'Our mature female escorts in Mumbai offer genuine companionship and passionate encounters. Experienced women who know exactly what they want and how to satisfy.', badge: '⭐ Mature', type: 'Experienced', availability: 'Daytime', rating: '5.0★' },
];

export default function ServicesPage() {
  const faqs = defaultFAQs('Mumbai');

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://hotzarina.in/services",
        name: "Escorts Services in Mumbai | All Categories",
        url: "https://hotzarina.in/services",
        description: "Browse all premium escort services in Mumbai. 30+ categories including VIP escorts, Russian escorts, model escorts, college girls, and more.",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://hotzarina.in" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://hotzarina.in/services" },
          ],
        },
      },
      {
        "@type": "ItemList",
        name: "Escorts Services in Mumbai",
        itemListElement: allServices.map((svc, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: svc.name,
          url: `https://hotzarina.in/${svc.slug}`,
          description: svc.description,
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
            <h1>Premium Escorts Services in Mumbai - All Categories</h1>
            <p>Explore Mumbai&apos;s most comprehensive escorts service directory. VIP escorts, Russian models, college girls, celebrity companions, and 25+ more categories available 24/7 across all Mumbai locations. 100% verified profiles, real photos, instant booking.</p>
            <div className="hero-buttons">
              <a href="tel:+919038976363" className="btn btn-primary">📞 Call us at +91 90389 76363</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="home-services-section" aria-labelledby="services-page-heading">
        <div className="container">
          <h2 id="services-page-heading">All Escorts Services in Mumbai</h2>
          <p className="section-subtitle">Browse our complete collection of premium escort services available 24/7 across Mumbai. Each category features verified companions with real photos and genuine profiles.</p>
          <div className="services-grid">
            {allServices.map((svc) => (
              <div key={svc.slug} className="service-card">
                <Image
                  src={"/images/Services/" + svc.slug + ".webp"}
                  alt={svc.name + " in Mumbai"}
                  width={350}
                  height={350}
                  loading="lazy"
                />
                <div className="service-info">
                  <h3>{svc.name}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#555', marginBottom: '0.75rem' }}>{svc.description.substring(0, 100)}...</p>
                  <div className="service-details">
                    <span className="detail-item">📍 Mumbai</span>
                    <span className="detail-item">⏰ {svc.availability}</span>
                  </div>
                  <div className="service-stats">
                    <div className="stat"><strong>Type</strong><span>{svc.type}</span></div>
                    <div className="stat"><strong>Avail.</strong><span>{svc.availability}</span></div>
                    <div className="stat"><strong>Rating</strong><span>{svc.rating}</span></div>
                  </div>
                  <Link href={"/" + svc.slug} className="btn-service">Book {svc.name}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="about-section" aria-labelledby="services-about-heading">
        <div className="container">
          <h2 id="services-about-heading">Why Our Mumbai Escort Services Are the Best</h2>
          <div className="about-grid">
            <div className="about-item">
              <h3>30+ Service Categories</h3>
              <p>From VIP escorts to regional companions, we offer the widest selection of escort services in Mumbai. Whatever your preference, we have the perfect companion for you.</p>
            </div>
            <div className="about-item">
              <h3>100% Verified Companions</h3>
              <p>Every escort in our service directory is personally verified with real photos, ID checks, and regular profile updates. Zero fake profiles guaranteed.</p>
            </div>
            <div className="about-item">
              <h3>Discreet & Confidential</h3>
              <p>Your privacy is our priority. All bookings and communications are handled with complete discretion. Secure, encrypted booking system.</p>
            </div>
            <div className="about-item">
              <h3>24/7 Availability</h3>
              <p>Our Mumbai escort services are available round the clock, 365 days a year. Book at any time for incall or outcall services across all Mumbai locations.</p>
            </div>
            <div className="about-item">
              <h3>Competitive Pricing</h3>
              <p>Transparent pricing with no hidden charges. Options available for every budget from affordable companionship to ultra-luxury VIP experiences.</p>
            </div>
            <div className="about-item">
              <h3>Easy Booking Process</h3>
              <p>Simple 3-step booking: browse profiles, call us, confirm. Response within 15 minutes and same-day availability for most service categories.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} location="Mumbai" />
    </main>
  );
}
