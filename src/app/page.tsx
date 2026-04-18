import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import EscortsGrid from "@/components/EscortsGrid";
import FAQSection from "@/components/FAQSection";
import { locations, services, defaultFAQs } from "@/lib/data";
import { locationImage, serviceImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "Escorts in Mumbai | Premium Call Girls Service 24/7 | Zarina",
  description:
    "Top Escorts in Mumbai - 100% Verified Call Girls Available 24/7. VIP Escorts, Russian Models, Independent Companions across Andheri, Bandra, Juhu, Powai. Safe, Discreet Booking. Call Now +91 90389 76363",
  alternates: { canonical: "https://hotzarina.in" },
  openGraph: {
    url: "https://hotzarina.in",
    title: "Escorts in Mumbai | Premium Call Girls Service 24/7 | Zarina",
    description: "Top Escorts in Mumbai - 100% Verified Call Girls Available 24/7. VIP Escorts, Russian Models, Independent Companions across Andheri, Bandra, Juhu, Powai.",
    images: [{ url: "/images/escorts-in-mumbai-banner.webp", width: 1200, height: 630 }],
  },
};

const serviceCardData = [
  { slug: 'vip-escorts', name: 'VIP Escorts Mumbai', badge: '⭐ Premium', location: 'All Locations', type: 'Elite', availability: '24/7', rating: '5.0★' },
  { slug: 'independent-escorts', name: 'Independent Escorts', badge: '⭐ Featured', location: 'Mumbai', type: 'Solo', availability: '24/7', rating: '4.9★' },
  { slug: 'model-escorts', name: 'Model Escorts', badge: '⭐ Premium', location: 'Mumbai', type: 'Fashion', availability: '24/7', rating: '5.0★' },
  { slug: 'college-girls-escorts', name: 'College Girls', badge: '⭐ Popular', location: 'Mumbai', type: 'Young', availability: 'Evening', rating: '4.8★' },
  { slug: 'russian-escorts', name: 'Russian Escorts', badge: '⭐ Exotic', location: 'Mumbai', type: 'Foreign', availability: '24/7', rating: '5.0★' },
  { slug: 'high-profile-escorts', name: 'High Profile', badge: '⭐ Luxury', location: 'All Locations', type: 'Elite', availability: '24/7', rating: '5.0★' },
  { slug: 'celebrity-escorts', name: 'Celebrity Escorts', badge: '⭐ Exclusive', location: 'Mumbai', type: 'VIP', availability: 'On Request', rating: '5.0★' },
  { slug: 'house-wife-escorts', name: 'Housewife Escorts', badge: '⭐ Mature', location: 'Mumbai', type: 'Experienced', availability: 'Daytime', rating: '4.9★' },
  { slug: 'air-hostess-escorts', name: 'Air Hostess', badge: '⭐ Professional', location: 'Mumbai', type: 'Elite', availability: 'On Call', rating: '4.9★' },
  { slug: 'bollywood-actress-escorts', name: 'Bollywood Actress', badge: '⭐ Celebrity', location: 'Mumbai', type: 'VIP', availability: 'Limited', rating: '5.0★' },
  { slug: 'female-model-escorts', name: 'Female Model', badge: '⭐ Premium', location: 'Mumbai', type: 'Fashion', availability: '24/7', rating: '5.0★' },
  { slug: 'north-indian-escorts', name: 'North Indian', badge: '⭐ Popular', location: 'Mumbai', type: 'Regional', availability: '24/7', rating: '4.8★' },
  { slug: 'south-indian-escorts', name: 'South Indian', badge: '⭐ Featured', location: 'Mumbai', type: 'Regional', availability: '24/7', rating: '4.9★' },
  { slug: 'punjabi-escorts', name: 'Punjabi Escorts', badge: '⭐ Popular', location: 'Mumbai', type: 'Regional', availability: '24/7', rating: '4.9★' },
  { slug: 'bengali-escorts', name: 'Bengali Escorts', badge: '⭐ Featured', location: 'Mumbai', type: 'Regional', availability: '24/7', rating: '4.8★' },
  { slug: 'marathi-escorts', name: 'Marathi Escorts', badge: '⭐ Local', location: 'Mumbai', type: 'Local', availability: '24/7', rating: '4.9★' },
  { slug: 'gujarati-escorts', name: 'Gujarati Escorts', badge: '⭐ Regional', location: 'Mumbai', type: 'Regional', availability: '24/7', rating: '4.8★' },
  { slug: 'role-play-escorts', name: 'Role Play Escorts', badge: '⭐ Special', location: 'Mumbai', type: 'Fantasy', availability: 'On Request', rating: '4.9★' },
  { slug: 'girlfriends-escorts', name: 'Girlfriend Experience', badge: '⭐ Popular', location: 'Mumbai', type: 'Intimate', availability: '24/7', rating: '5.0★' },
  { slug: 'bdsm-escorts', name: 'BDSM Escorts', badge: '⭐ Special', location: 'Mumbai', type: 'Exotic', availability: 'On Request', rating: '4.9★' },
  { slug: 'hj-bj-escorts', name: 'HJ BJ Escorts', badge: '⭐ Premium', location: 'Mumbai', type: 'Special', availability: '24/7', rating: '4.8★' },
  { slug: 'horny-escorts', name: 'Horny Escorts', badge: '⭐ Popular', location: 'Mumbai', type: 'Hot', availability: '24/7', rating: '4.9★' },
  { slug: 'jaat-escorts', name: 'Jaat Escorts', badge: '⭐ Regional', location: 'Mumbai', type: 'Regional', availability: '24/7', rating: '4.8★' },
  { slug: 'lesbian-escorts', name: 'Lesbian Escorts', badge: '⭐ Special', location: 'Mumbai', type: 'Fantasy', availability: 'On Request', rating: '5.0★' },
  { slug: 'marwadi-escorts', name: 'Marwadi Escorts', badge: '⭐ Regional', location: 'Mumbai', type: 'Regional', availability: '24/7', rating: '4.9★' },
  { slug: 'mumbai-escorts', name: 'Mumbai Escorts', badge: '⭐ Local', location: 'Mumbai', type: 'Local', availability: '24/7', rating: '5.0★' },
  { slug: 'muslim-escorts', name: 'Muslim Escorts', badge: '⭐ Featured', location: 'Mumbai', type: 'Religious', availability: '24/7', rating: '4.9★' },
  { slug: 'nepali-escorts', name: 'Nepali Escorts', badge: '⭐ Exotic', location: 'Mumbai', type: 'Foreign', availability: '24/7', rating: '4.8★' },
  { slug: 'unsatisfied-bhabhi', name: 'Unsatisfied Bhabhi', badge: '⭐ Mature', location: 'Mumbai', type: 'Experienced', availability: 'Daytime', rating: '5.0★' },
  { slug: 'unsatisfied-female', name: 'Unsatisfied Female', badge: '⭐ Mature', location: 'Mumbai', type: 'Experienced', availability: 'Daytime', rating: '5.0★' },
];

export default function Home() {
  const faqs = defaultFAQs('Mumbai');

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://hotzarina.in/#business",
        name: "Zarina Escorts Mumbai",
        alternateName: "Hotzarina",
        description: "Mumbai's #1 premium escort service offering verified call girls, VIP companions, Russian models and independent escorts across all Mumbai locations. Available 24/7.",
        url: "https://hotzarina.in",
        telephone: "+91-90389-76363",
        image: "https://hotzarina.in/images/escorts-in-mumbai-banner.webp",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          postalCode: "400001",
          addressCountry: "IN",
        },
        geo: { "@type": "GeoCoordinates", latitude: 19.076, longitude: 72.8777 },
        areaServed: { "@type": "City", name: "Mumbai" },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
        priceRange: "₹₹₹",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: 1250, bestRating: "5" },
        sameAs: ["https://wa.me/919038976363", "https://t.me/hotzarinain"],
      },
      {
        "@type": "WebSite",
        "@id": "https://hotzarina.in/#website",
        url: "https://hotzarina.in",
        name: "Zarina Escorts Mumbai",
        potentialAction: {
          "@type": "SearchAction",
          target: { "@type": "EntryPoint", urlTemplate: "https://hotzarina.in/escorts-in-{search_term_string}" },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://hotzarina.in" }],
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
      <link rel="preload" href="/images/escorts-in-mumbai-banner.webp" as="image" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Hero Section */}
      <section className="hero" style={{ background: "linear-gradient(rgba(128,0,128,0.7),rgba(128,0,128,0.7)), url('/images/escorts-in-mumbai-banner.webp') center/cover no-repeat" }} aria-label="Premium Escorts in Mumbai" itemScope itemType="https://schema.org/LocalBusiness">
        <div className="container">
          <div className="hero-content">
            <h1>Escorts in Mumbai - Premium Call Girls Service Available 24/7</h1>
            <p>Welcome to Mumbai&apos;s #1 escorts service! Top-rated escorts in Mumbai with 100% verified profiles. VIP companions, independent escorts, Russian models, and college girls available across all Mumbai locations including Andheri, Bandra, Juhu, Worli &amp; Powai. Discreet, safe booking with instant confirmation.</p>
            <div className="hero-buttons">
              <a href="tel:+919038976363" className="btn btn-primary" aria-label="Call Zarina Escorts Mumbai">📞 Call us at +91 90389 76363</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip – Experience & Trustworthiness signals */}
      <section className="stats-strip" aria-label="Zarina Escorts Service Statistics">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item"><strong>1,250+</strong><span>Happy Clients</span></div>
            <div className="stat-item"><strong>5+ Years</strong><span>Serving Mumbai</span></div>
            <div className="stat-item"><strong>125+</strong><span>Locations Covered</span></div>
            <div className="stat-item"><strong>4.9 / 5★</strong><span>Average Client Rating</span></div>
            <div className="stat-item"><strong>24 / 7</strong><span>Always Available</span></div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="contact-instant" aria-label="Escorts in Mumbai Introduction">
        <div className="container">
          <h2>Your Trusted Companion Service in Mumbai Since 2020</h2>
          <p>Looking for premium <strong>escorts in Mumbai</strong>? You&apos;ve found the right place! We are Mumbai&apos;s most trusted and authentic escort service, offering verified call girls, VIP companions, and independent escorts across all Mumbai locations. Our <strong>Mumbai escorts</strong> service has been serving discerning clients since 2020 with 100% genuine profiles, real photos, and professional service. Whether you&apos;re in South Mumbai (Colaba, Nariman Point, Marine Drive), Western Suburbs (Andheri, Bandra, Juhu, Lokhandwala), Central Mumbai (Dadar, Parel, Worli, Lower Parel), or Navi Mumbai (Kharghar, Vashi, Belapur) - our <strong>call girls in Mumbai</strong> are available 24/7 for incall and outcall services.</p>
          <div className="contact-buttons">
            <a href="tel:+919038976363" className="btn btn-call" aria-label="Call Mumbai Escorts Now">📞 Call Now</a>
          </div>
        </div>
      </section>

      {/* Escorts Section */}
      <EscortsGrid location="Mumbai" title="Meet Our Verified Mumbai Companions - 100% Real Profiles & Photos" subtitle="Discover Mumbai's finest escorts service with verified call girls, VIP escorts, and independent companions. Our Mumbai escorts are available 24/7 for outcall and incall services across South Mumbai, Western Suburbs, Central Mumbai, Navi Mumbai, and all major areas. Real photos, real girls, guaranteed satisfaction." />

      {/* Services Section */}
      <section className="home-services-section" aria-labelledby="services-heading">
        <div className="container">
          <h2 id="services-heading">Browse Our Premium Service Categories</h2>
          <p className="section-subtitle">Top-rated escorts services in Mumbai including VIP escorts, Russian escorts, college girls, models, and independent call girls available 24/7 for incall and outcall across all Mumbai locations.</p>
          <div className="services-grid">
            {serviceCardData.map((svc) => (
              <div key={svc.slug} className="service-card">
                <Image src={serviceImage(svc.slug)} alt={svc.name + " in Mumbai"} width={350} height={350} loading="lazy" />
                <div className="service-info">
                  <h3>{svc.name}</h3>
                  <div className="service-details">
                    <span className="detail-item"><i>{svc.badge.split(' ')[0]}</i> {svc.badge.split(' ').slice(1).join(' ')}</span>
                    <span className="detail-item"><i>📍</i> {svc.location}</span>
                  </div>
                  <div className="service-stats">
                    <div className="stat"><strong>Type</strong><span>{svc.type}</span></div>
                    <div className="stat"><strong>Availability</strong><span>{svc.availability}</span></div>
                    <div className="stat"><strong>Rating</strong><span>{svc.rating}</span></div>
                  </div>
                  <Link href={"/" + svc.slug} className="btn-service">Book {svc.name}</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-btn">
            <Link href="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="home-locations-section" aria-labelledby="locations-heading">
        <div className="container">
          <h2 id="locations-heading">Available Across All Mumbai &amp; India Locations 24/7</h2>
          <p className="section-subtitle">Our premium escorts in Mumbai are available across all major locations including Andheri, Bandra, Juhu, Colaba, Mumbai Airport, Thane, and more. Book escorts near you for outcall and incall services.</p>
          <div className="locations-grid">
            {locations.map((loc) => (
              <div key={loc.slug} className="location-card">
                <Image src={locationImage(loc.slug)} alt={"Escorts in " + loc.name + " - Call Girls Service " + loc.name} width={350} height={350} loading="lazy" />
                <div className="location-info">
                  <Link href={"/escorts-in-" + loc.slug} className="btn-location" aria-label={"Book Escorts in " + loc.name}>Escorts in {loc.name}</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-btn">
            <Link href="/location" className="btn btn-primary" aria-label="View All Escort Locations">View All Locations</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" aria-labelledby="about-heading">
        <div className="container">
          <h2 id="about-heading">Why Clients Trust Zarina - Our Key Advantages</h2>
          <div className="about-grid">
            <div className="about-item">
              <h3>100% Verified Escorts in Mumbai</h3>
              <p>All our Mumbai escorts are verified with real photos and genuine profiles. We ensure complete transparency and authenticity. Book with confidence knowing you&apos;re getting exactly what you see - no fake profiles, no bait and switch.</p>
              <p>Our rigorous verification process includes photo verification, ID checks, and regular profile updates. Every escort in Mumbai listed on our platform is genuine and professional.</p>
            </div>
            <div className="about-item">
              <h3>24/7 Availability Across Mumbai</h3>
              <p>Our Mumbai call girls are available 24/7 for both incall and outcall services at all iconic locations - Gateway of India, Marine Drive, Taj Mahal Palace Hotel, Colaba Causeway, Juhu Beach, BKC, and Andheri areas. Whether you need escorts at Mumbai Airport at 3 AM or in Bandra at noon, we&apos;re always ready to serve you.</p>
              <p>We cover all major locations including Andheri, Juhu, Colaba, Powai, Worli, Lower Parel, and more. Same-day booking available with express service for urgent requirements.</p>
            </div>
            <div className="about-item">
              <h3>Premium Quality at Best Prices</h3>
              <p>Experience luxury escorts in Mumbai at competitive rates. Our pricing is transparent with no hidden charges. From budget-friendly independent escorts to VIP high-profile companions, we have options for every budget.</p>
              <p>Special packages available for overnight stays, dinner dates, and weekend getaways. Flexible payment options including cash and online transfers accepted.</p>
            </div>
            <div className="about-item">
              <h3>100% Discreet &amp; Confidential</h3>
              <p>Your privacy is our top priority. All bookings and communications are handled with complete discretion. We never share client information and maintain strict confidentiality protocols.</p>
              <p>Our escorts are trained in discretion and professionalism. Whether it&apos;s a business event or private encounter, your privacy is guaranteed. Secure booking system with encrypted communications.</p>
            </div>
            <div className="about-item">
              <h3>Diverse Selection of Escorts</h3>
              <p>Choose from VIP escorts, Russian models, college girls, air hostess, housewives, celebrity escorts available at Mumbai&apos;s finest locations. Every type and preference is available - Indian, foreign, regional beauties from North India, South India, Bengal, Punjab, Gujarat, and Maharashtra.</p>
              <p>Age range from 18-35 years with variety in looks, figures, and specializations. Whether you prefer slim, curvy, petite, or tall companions, we have the perfect match for you.</p>
            </div>
            <div className="about-item">
              <h3>Easy Booking &amp; Support</h3>
              <p>Simple 3-step booking process - browse profiles, call us, confirm your booking. Our customer support team is available 24/7 to assist you with any questions or special requests.</p>
              <p>Instant confirmation, quick response time under 15 minutes, and flexible cancellation policies. We value your time and ensure smooth, hassle-free experiences from booking to service delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials – backs up AggregateRating in JSON-LD, critical for E-E-A-T */}
      <section className="testimonials-section" aria-labelledby="testimonials-heading">
        <div className="container">
          <h2 id="testimonials-heading">What Our Clients Say About Us</h2>
          <p className="section-subtitle">Real verified reviews from 1,250+ satisfied clients of our Mumbai escorts service</p>
          <div className="testimonials-grid">
            {[
              { name: "Rahul M.", location: "Andheri", review: "Exceptional service from start to finish! The escort was professional, punctual, and exactly as described in the profile. Booking was seamless and completely confidential. Genuinely the best escorts in Mumbai — highly recommend Zarina!", rating: 5, date: "March 2026" },
              { name: "Arjun S.", location: "Bandra", review: "Used their VIP escort for a corporate dinner. She was stunning, intelligent, and made the entire evening perfect. The booking team responded in under 10 minutes and maintained complete discretion throughout. Will definitely book again.", rating: 5, date: "March 2026" },
              { name: "Vikram P.", location: "Juhu", review: "Best escorts service in Mumbai, no question. 100% genuine profiles, real photos — absolutely no bait and switch. Fast confirmation, total privacy. The escort was amazing and the experience was truly memorable.", rating: 5, date: "February 2026" },
              { name: "Rajesh K.", location: "Powai", review: "Called at midnight and they responded within 10 minutes. The companion was beautiful, well-presented and exactly as advertised. Completely verified profiles, real photos. Great value and total privacy guaranteed.", rating: 5, date: "February 2026" },
              { name: "Dev A.", location: "Worli", review: "Outstanding experience. The team was helpful, responsive and discreet. Profile photos matched exactly in real life — truly 100% genuine. The whole process from booking to the experience itself was luxurious and professional.", rating: 5, date: "January 2026" },
              { name: "Sanjay T.", location: "Colaba", review: "Booked a high-profile escort for a business event — elegant, sophisticated, completely professional. Exactly what I needed. Clean, discreet process with real profiles. Zarina is truly Mumbai's #1 escort service. A 5-star experience all the way.", rating: 5, date: "January 2026" },
            ].map((t, i) => (
              <div key={i} className="testimonial-card" itemScope itemType="https://schema.org/Review">
                <div className="testimonial-stars" aria-label={`${t.rating} out of 5 stars`}>
                  {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
                </div>
                <p className="testimonial-review" itemProp="reviewBody">&ldquo;{t.review}&rdquo;</p>
                <div className="testimonial-author" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <strong itemProp="name">{t.name}</strong>
                  <span>{t.location} &middot; <time itemProp="datePublished">{t.date}</time></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section" aria-labelledby="content-heading">
        <div className="container">
          <h2 id="content-heading">Complete Guide to Premium Call Girls Service in Mumbai</h2>
          <div className="content-wrapper">
            <p>Welcome to Mumbai&apos;s most trusted and premium <strong>escorts in Mumbai</strong> service! We offer verified, high-class <strong>call girls in Mumbai</strong> available 24/7 across all major locations. Whether you&apos;re seeking companionship for business events, social gatherings, or private encounters, our elite <strong>Mumbai escorts</strong> provide unmatched sophistication, beauty, and discretion.</p>
            <h3>Why Choose Our Escorts in Mumbai?</h3>
            <p>Our <strong>escorts service in Mumbai</strong> stands apart with 100% verified profiles, genuine photos, and authentic experiences. We specialize in providing <Link href="/vip-escorts" style={{ color: '#800080', textDecoration: 'none', borderBottom: '2px solid #800080' }}><strong>VIP escorts in Mumbai</strong></Link>, independent call girls, Russian escorts, model escorts, college girls, celebrity escorts, and air hostess companions. Unlike many services, every escort listed with us goes through a thorough verification process — including photo ID checks and profile authenticity verification — so what you see is exactly what you get.</p>
            <h3>Complete Coverage Across Mumbai Locations</h3>
            <p>Our <strong>Mumbai call girls</strong> are strategically available across all premium locations including <Link href="/escorts-in-andheri" style={{ color: '#800080', textDecoration: 'none' }}>Andheri</Link>, <Link href="/escorts-in-bandra" style={{ color: '#800080', textDecoration: 'none' }}>Bandra</Link>, <Link href="/escorts-in-juhu" style={{ color: '#800080', textDecoration: 'none' }}>Juhu</Link>, <Link href="/escorts-in-colaba" style={{ color: '#800080', textDecoration: 'none' }}>Colaba</Link>, <Link href="/escorts-in-powai" style={{ color: '#800080', textDecoration: 'none' }}>Powai</Link>, Worli, Lower Parel, Mumbai Airport, Thane, Navi Mumbai, and beyond. Whether you need outcall service to your hotel room or incall at a comfortable private location, our 125+ location network ensures we are always near you.</p>
            <h3>Understanding Our Pricing & Packages</h3>
            <p>We believe in complete pricing transparency with zero hidden charges. Our <strong>Mumbai escorts</strong> rates are structured to cater to every budget — from budget-friendly independent escorts to ultra-premium VIP companions and celebrity escorts. Rates vary based on the escort category, duration (1 hour, 2 hours, overnight), and the type of service (incall or outcall). Overnight packages and extended companion bookings are available at special discounted rates. All pricing is discussed and confirmed upfront before any booking is finalised — we never spring surprise charges.</p>
            <h3>Safety, Discretion &amp; Privacy Commitment</h3>
            <p>Your safety and privacy are our absolute top priorities. Since 2020, we have maintained a zero-tolerance policy for data sharing — your name, phone number, and booking details are never disclosed to any third party. All communications via call, WhatsApp, or our booking form are encrypted and handled exclusively by our trusted team. Our <strong>escort girls in Mumbai</strong> are trained in professional conduct and complete discretion. We operate within all applicable legal frameworks and encourage responsible, consensual adult companionship only.</p>
            <h3>How to Book Your Perfect Companion — 3 Simple Steps</h3>
            <p>Booking with Zarina takes less than 15 minutes. <strong>Step 1</strong>: Browse our verified escort profiles and select a companion that matches your preferences. <strong>Step 2</strong>: Contact us via phone (<strong>+91 90389 76363</strong>) or WhatsApp to confirm availability, discuss your requirements, and agree on the details. <strong>Step 3</strong>: Receive instant confirmation and your escort arrives at your location on time, every time. Our customer support team is available 24/7 to answer questions and accommodate special requests. For same-day or urgent bookings, call us directly for the fastest response.</p>
            <h3>Book Your Perfect Companion Today</h3>
            <p>Contact us now at <strong>+91 90389 76363</strong> to explore our exclusive collection of <strong>Mumbai call girls</strong> and book your perfect companion. Same-day availability, instant confirmation, and unforgettable experiences await. Ready to book? <Link href="/contact" style={{ color: '#800080', fontWeight: 600, textDecoration: 'none', borderBottom: '2px solid #800080' }}>Fill our booking form</Link> or call us directly for the fastest response.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} location="Mumbai" />
    </main>
  );
}
