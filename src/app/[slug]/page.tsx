import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import EscortsGrid from "@/components/EscortsGrid";
import FAQSection from "@/components/FAQSection";
import {
  locations,
  services,
  getLocationBySlug,
  getServiceBySlug,
  defaultFAQs,
} from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const locationParams = locations.map((loc) => ({ slug: "escorts-in-" + loc.slug }));
  const serviceParams = services.map((svc) => ({ slug: svc.slug }));
  return [...locationParams, ...serviceParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  if (slug.startsWith("escorts-in-")) {
    const locationSlug = slug.replace("escorts-in-", "");
    const location = getLocationBySlug(locationSlug);
    if (!location) return { title: "Not Found" };
    return {
      title: `Escorts in ${location.name} | Premium Call Girls ${location.name} | Zarina`,
      description: `100% verified escorts in ${location.name}. Premium call girls available 24/7 for incall & outcall. ${location.reviewCount}+ client reviews. Book now at +91 90389 76363.`,
      keywords: [`escorts in ${location.name.toLowerCase()}`, `${location.name.toLowerCase()} escorts`, `call girls ${location.name.toLowerCase()}`, `escort service ${location.name.toLowerCase()}`],
      alternates: { canonical: `https://hotzarina.in/escorts-in-${location.slug}` },
      openGraph: {
        title: `Escorts in ${location.name} | Premium Call Girls`,
        description: `Verified escorts in ${location.name} available 24/7. ${location.reviewCount}+ reviews.`,
        url: `https://hotzarina.in/escorts-in-${location.slug}`,
        siteName: "Hotzarina",
        locale: "en_IN",
        type: "website",
      },
    };
  }

  const service = getServiceBySlug(slug);
  if (!service) return { title: "Not Found" };
  return {
    title: `${service.name} in Mumbai | Book ${service.name} 24/7 | Zarina`,
    description: `Book ${service.name} in Mumbai 24/7. 100% verified, discreet service. Premium ${service.name.toLowerCase()} available across all Mumbai locations. Call +91 90389 76363.`,
    keywords: [`${service.name.toLowerCase()} mumbai`, `${service.name.toLowerCase()}`, `book ${service.slug} mumbai`, `${service.slug} escort service`],
    alternates: { canonical: `https://hotzarina.in/${service.slug}` },
    openGraph: {
      title: `${service.name} in Mumbai | Book 24/7`,
      description: `Book ${service.name} in Mumbai. Verified, discreet, available 24/7.`,
      url: `https://hotzarina.in/${service.slug}`,
      siteName: "Hotzarina",
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;

  // Location page: escorts-in-[location]
  if (slug.startsWith("escorts-in-")) {
    const locationSlug = slug.replace("escorts-in-", "");
    const location = getLocationBySlug(locationSlug);
    if (!location) notFound();

    const faqs = defaultFAQs(location.name);
    const nearbyLocations = locations.filter((l) => l.slug !== locationSlug).slice(0, 12);

    const locationJsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["LocalBusiness", "ProfessionalService"],
          "@id": `https://hotzarina.in/escorts-in-${location.slug}#business`,
          name: `Zarina Escorts ${location.name}`,
          description: `Premium verified escorts in ${location.name}. 100% genuine call girls available 24/7 for incall & outcall. ${location.reviewCount}+ satisfied clients.`,
          url: `https://hotzarina.in/escorts-in-${location.slug}`,
          telephone: "+91-90389-76363",
          image: `https://hotzarina.in/images/escorts/escorts-in-${location.slug}.webp`,
          address: {
            "@type": "PostalAddress",
            addressLocality: location.city,
            addressRegion: location.state,
            postalCode: location.postalCode,
            addressCountry: "IN",
          },
          geo: { "@type": "GeoCoordinates", latitude: location.lat, longitude: location.lng },
          areaServed: { "@type": "City", name: location.name },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
            opens: "00:00",
            closes: "23:59",
          },
          priceRange: "₹₹₹",
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: String(location.reviewCount), bestRating: "5" },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://hotzarina.in" },
            { "@type": "ListItem", position: 2, name: `Escorts in ${location.name}`, item: `https://hotzarina.in/escorts-in-${location.slug}` },
          ],
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
        <link rel="preload" href={`/images/escorts/escorts-in-${locationSlug}.webp`} as="image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationJsonLd) }} />
        {/* Hero */}
        <section className="hero" style={{ background: `linear-gradient(rgba(128,0,128,0.75),rgba(128,0,128,0.75)), url('/images/escorts/escorts-in-${locationSlug}.webp') center/cover no-repeat` }}>
          <div className="container">
            <div className="hero-content">
              <h1>Escorts in {location.name} - Premium Call Girls Available 24/7</h1>
              <p>Welcome to {location.name}&apos;s #1 escort service! Premium verified call girls in {location.name} available 24/7 for incall &amp; outcall. {location.reviewCount}+ satisfied clients. Serving {location.areas.slice(0, 3).join(', ')} and all areas in {location.name}, {location.state}.</p>
              <div className="hero-buttons">
                <a href="tel:+919038976363" className="btn btn-primary">📞 Call us at +91 90389 76363</a>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="contact-instant">
          <div className="container">
            <h2>Your Trusted Escort Service in {location.name} Since 2020</h2>
            <p>Looking for premium <strong>escorts in {location.name}</strong>? You&apos;ve found the right place! We offer 100% verified call girls in {location.name} with genuine profiles and real photos. Our <strong>{location.name} escorts</strong> cover all areas including {location.areas.join(', ')}. Available 24/7 for immediate booking with instant confirmation.</p>
            <div className="contact-buttons">
              <a href="tel:+919038976363" className="btn btn-call">📞 Call Now</a>
              <a href="https://wa.me/919038976363" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        {/* Escorts Grid */}
        <EscortsGrid
          location={location.name}
          title={"Meet Our Verified " + location.name + " Companions - 100% Real Profiles"}
          subtitle={"Discover " + location.name + "'s finest escorts service with verified call girls. Available 24/7 across " + location.areas.join(', ') + " and all areas in " + location.name + ". Real photos, real girls, guaranteed satisfaction."}
        />

        {/* Services for this Location */}
        <section className="home-services-section">
          <div className="container">
            <h2>Our Escorts Services in {location.name}</h2>
            <p className="section-subtitle">We offer all types of escort services in {location.name} - VIP escorts, independent call girls, Russian escorts, model escorts, college girls, air hostess, and more.</p>
            <div className="services-grid">
              {services.slice(0, 12).map((svc) => (
                <div key={svc.slug} className="service-card">
                  <Image
                    src={"/images/Services/" + svc.slug + ".webp"}
                    alt={svc.name + " in " + location.name}
                    width={350}
                    height={350}
                    loading="lazy"
                  />
                  <div className="service-info">
                    <h3>{svc.name}</h3>
                    <div className="service-details">
                      <span className="detail-item">📍 {location.name}</span>
                      <span className="detail-item">⏰ 24/7</span>
                    </div>
                    <div className="service-stats">
                      <div className="stat"><strong>Type</strong><span>Elite</span></div>
                      <div className="stat"><strong>Avail.</strong><span>24/7</span></div>
                      <div className="stat"><strong>Rating</strong><span>5.0★</span></div>
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

        {/* Nearby Locations */}
        <section className="home-locations-section">
          <div className="container">
            <h2>Escorts in Nearby Locations</h2>
            <p className="section-subtitle">Our escort service covers locations near {location.name}. Find verified call girls across all nearby areas.</p>
            <div className="locations-grid">
              {nearbyLocations.map((loc) => (
                <div key={loc.slug} className="location-card">
                  <Image
                    src={"/images/escorts/escorts-in-" + loc.slug + ".webp"}
                    alt={"Escorts in " + loc.name}
                    width={350}
                    height={350}
                    loading="lazy"
                  />
                  <div className="location-info">
                    <Link href={"/escorts-in-" + loc.slug} className="btn-location">Escorts in {loc.name}</Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="view-all-btn">
              <Link href="/location" className="btn btn-primary">View All Locations</Link>
            </div>
          </div>
        </section>

        {/* About Location */}
        <section className="about-section">
          <div className="container">
            <h2>Why Choose Our Escort Service in {location.name}?</h2>
            <div className="about-grid">
              <div className="about-item">
                <h3>Local {location.name} Experts</h3>
                <p>Our {location.name} escorts have deep local knowledge, understand the area perfectly, and can guide you to the best spots. Genuine {location.name} experience with local insight.</p>
              </div>
              <div className="about-item">
                <h3>100% {location.reviewCount}+ Verified Reviews</h3>
                <p>With {location.reviewCount}+ client reviews in {location.name}, we are the most trusted escort service in the area. Real reviews from real clients guarantee your satisfaction.</p>
              </div>
              <div className="about-item">
                <h3>All Areas Covered</h3>
                <p>We cover all {location.name} areas: {location.areas.join(', ')}. Outcall to your hotel or home, and incall at our companions&apos; locations.</p>
              </div>
              <div className="about-item">
                <h3>24/7 Service</h3>
                <p>Our {location.name} escorts are available round the clock. Same-day booking and express service within 30-60 minutes across all {location.name} areas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="content-section">
          <div className="container">
            <h2>Complete Guide to Escorts in {location.name}</h2>
            <div className="content-wrapper">
              <p>Welcome to the most trusted <strong>escorts in {location.name}</strong> service. We provide premium <strong>call girls in {location.name}</strong> with 100% verified profiles, genuine photos, and professional service. Our {location.name} escorts are available 24/7 for incall and outcall services across {location.areas.join(', ')}.</p>
              <h3>Types of Escorts Available in {location.name}</h3>
              <p>We offer VIP escorts, independent call girls, Russian escorts, model escorts, college girls, celebrity escorts, air hostess companions, housewife escorts, and regional escorts (North Indian, South Indian, Punjabi, Bengali, Marathi) in {location.name}.</p>
              <h3>How to Book Escorts in {location.name}</h3>
              <p>Call us at <strong>+91 90389 76363</strong> or WhatsApp us. Tell us your preferred companion, location in {location.name}, and timing. We&apos;ll confirm availability and complete your booking within 15 minutes. Same-day and advance booking available.</p>
              <h3>Areas We Cover in {location.name}</h3>
              <p>Our {location.name} escort service covers all major areas including {location.areas.join(', ')} and more. Serving {location.name}, {location.state} - PIN: {location.postalCode}.</p>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} location={location.name} />
      </main>
    );
  }

  // Service page
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const faqs = defaultFAQs('Mumbai');

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://hotzarina.in/${service.slug}#service`,
        name: `${service.name} in Mumbai`,
        description: `Book ${service.name} in Mumbai 24/7. 100% verified, discreet service. Premium ${service.name.toLowerCase()} available across all Mumbai locations.`,
        provider: {
          "@type": "LocalBusiness",
          name: "Zarina Escorts Mumbai",
          telephone: "+91-90389-76363",
          url: "https://hotzarina.in",
        },
        areaServed: { "@type": "City", name: "Mumbai" },
        url: `https://hotzarina.in/${service.slug}`,
        image: `https://hotzarina.in/images/Services/${service.slug}.webp`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://hotzarina.in" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://hotzarina.in/services" },
          { "@type": "ListItem", position: 3, name: service.name, item: `https://hotzarina.in/${service.slug}` },
        ],
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
      <link rel="preload" href={`/images/Services/${service.slug}.webp`} as="image" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      {/* Hero */}
      <section className="hero" style={{ background: `linear-gradient(rgba(128,0,128,0.8),rgba(128,0,128,0.8)), url('/images/Services/${service.slug}.webp') center/cover no-repeat` }}>
        <div className="container">
          <div className="hero-content">
            <h1>{service.name} in Mumbai - Book Online 24/7</h1>
            <p>Book premium <strong>{service.name.toLowerCase()}</strong> in Mumbai 24/7. 100% verified companions, real photos, discreet service. Available across all Mumbai locations including Andheri, Bandra, Juhu, Colaba, Powai, Thane, and Navi Mumbai.</p>
            <div className="hero-buttons">
              <a href="tel:+919038976363" className="btn btn-primary">📞 Call us at +91 90389 76363</a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="contact-instant">
        <div className="container">
          <h2>Premium {service.name} in Mumbai - 100% Verified</h2>
          <p>Looking for the best <strong>{service.name.toLowerCase()} in Mumbai</strong>? Our {service.name.toLowerCase()} are 100% verified with genuine profiles and real photos. Available 24/7 for incall and outcall services across all Mumbai locations. Professional, discreet, and memorable experiences guaranteed.</p>
          <div className="contact-buttons">
            <a href="tel:+919038976363" className="btn btn-call">📞 Call Now</a>
            <a href="https://wa.me/919038976363" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Escorts Grid */}
      <EscortsGrid
        location="Mumbai"
        title={"Our Verified " + service.name + " - Real Profiles"}
        subtitle={"Browse our exclusive collection of " + service.name.toLowerCase() + " in Mumbai. All companions are 100% verified with genuine photos. Available 24/7 across all Mumbai locations for incall and outcall services."}
      />

      {/* Locations for this Service */}
      <section className="home-locations-section">
        <div className="container">
          <h2>{service.name} Available in All Mumbai Locations</h2>
          <p className="section-subtitle">Our {service.name.toLowerCase()} are available across all major Mumbai locations and Indian cities. Find {service.name.toLowerCase()} near you.</p>
          <div className="locations-grid">
            {locations.slice(0, 24).map((loc) => (
              <div key={loc.slug} className="location-card">
                <Image
                  src={"/images/escorts/escorts-in-" + loc.slug + ".webp"}
                  alt={service.name + " in " + loc.name}
                  width={350}
                  height={350}
                  loading="lazy"
                />
                <div className="location-info">
                  <Link href={"/escorts-in-" + loc.slug} className="btn-location">{service.name} in {loc.name}</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-btn">
            <Link href="/location" className="btn btn-primary">View All Locations</Link>
          </div>
        </div>
      </section>

      {/* About Service */}
      <section className="about-section">
        <div className="container">
          <h2>Why Choose Our {service.name} in Mumbai?</h2>
          <div className="about-grid">
            <div className="about-item">
              <h3>100% Verified {service.name}</h3>
              <p>All our {service.name.toLowerCase()} in Mumbai are personally verified with real photos, genuine profiles, and regular updates. Zero fake profiles guaranteed.</p>
            </div>
            <div className="about-item">
              <h3>Available 24/7</h3>
              <p>Our {service.name.toLowerCase()} are available round the clock across all Mumbai locations. Same-day booking with express service within 30-60 minutes.</p>
            </div>
            <div className="about-item">
              <h3>100% Discreet</h3>
              <p>Complete privacy and confidentiality guaranteed. Your booking details and personal information are never shared. Secure, encrypted communications.</p>
            </div>
            <div className="about-item">
              <h3>Premium Experience</h3>
              <p>Our {service.name.toLowerCase()} provide exceptional, memorable experiences. Professional, sophisticated, and dedicated to your satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <div className="container">
          <h2>Complete Guide to {service.name} in Mumbai</h2>
          <div className="content-wrapper">
            <p>Welcome to Mumbai&apos;s premier <strong>{service.name.toLowerCase()}</strong> service. We offer the finest {service.name.toLowerCase()} in Mumbai with 100% verified profiles and genuine photos. Our companions are available 24/7 across all Mumbai locations for incall and outcall services.</p>
            <h3>How to Book {service.name} in Mumbai</h3>
            <p>Booking is simple! Call us at <strong>+91 90389 76363</strong> or WhatsApp. Tell us your requirements and location. We confirm availability and complete booking within 15 minutes. Same-day and advance booking available.</p>
            <h3>Why Our {service.name} Stand Out</h3>
            <p>Our {service.name.toLowerCase()} in Mumbai are handpicked for their beauty, intelligence, and professionalism. Each companion undergoes thorough verification. We maintain strict quality standards to ensure your experience exceeds expectations.</p>
            <h3>Other Escorts Services in Mumbai</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
              {services.filter((s) => s.slug !== slug).slice(0, 10).map((s) => (
                <Link
                  key={s.slug}
                  href={"/" + s.slug}
                  style={{ background: '#f3e8ff', color: '#800080', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.85rem', textDecoration: 'none', border: '1px solid #d8b4fe' }}
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} location="Mumbai" />
    </main>
  );
}
