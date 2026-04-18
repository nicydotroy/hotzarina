import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ReactDOM from "react-dom";
import EscortsGrid from "@/components/EscortsGrid";
import FAQSection from "@/components/FAQSection";
import {
  locations,
  services,
  spaServices,
  getLocationBySlug,
  getServiceBySlug,
  defaultFAQs,
  defaultSpaFAQs,
  defaultMaleEscortFAQs,
} from "@/lib/data";
import { locationImage, serviceImage } from "@/lib/images";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const locationParams = locations.map((loc) => ({ slug: "escorts-in-" + loc.slug }));
  const spaParams = locations.map((loc) => ({ slug: "spa-center-in-" + loc.slug }));
  const maleParams = locations.map((loc) => ({ slug: "male-escorts-in-" + loc.slug }));
  const serviceParams = services.map((svc) => ({ slug: svc.slug }));
  return [...locationParams, ...spaParams, ...maleParams, ...serviceParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  if (slug.startsWith("escorts-in-")) {
    const locationSlug = slug.replace("escorts-in-", "");
    const location = getLocationBySlug(locationSlug);
    if (!location) return { title: "Not Found" };
    return {
      title: `Escorts in ${location.name} | Call Girls 24/7 | Zarina`,
      description: `100% verified escorts in ${location.name}. Premium call girls available 24/7 for incall & outcall. ${location.reviewCount}+ client reviews. Book now at +91 90389 76363.`,
      alternates: { canonical: `https://hotzarina.in/escorts-in-${location.slug}` },
      openGraph: {
        title: `Escorts in ${location.name} | Premium Call Girls`,
        description: `Verified escorts in ${location.name} available 24/7. ${location.reviewCount}+ reviews.`,
        url: `https://hotzarina.in/escorts-in-${location.slug}`,
        siteName: "Hotzarina",
        locale: "en_IN",
        type: "website",
        images: [{ url: `https://hotzarina.in${locationImage(location.slug)}`, width: 1200, height: 630, alt: `Escorts in ${location.name} | Zarina` }],
      },
      twitter: {
        card: "summary_large_image",
        title: `Escorts in ${location.name} | Call Girls 24/7 | Zarina`,
        description: `Verified escorts in ${location.name} available 24/7. ${location.reviewCount}+ reviews.`,
        images: [`https://hotzarina.in${locationImage(location.slug)}`],
      },
    };
  }

  if (slug.startsWith("spa-center-in-")) {
    const locationSlug = slug.replace("spa-center-in-", "");
    const location = getLocationBySlug(locationSlug);
    if (!location) return { title: "Not Found" };
    return {
      title: `SPA Center in ${location.name} | Massage & Body Spa 24/7 | Hotzarina`,
      description: `Top-rated SPA center in ${location.name}. Book full body massage, Swedish massage, body-to-body, Nuru & happy ending massage. 100% private & hygienic. Call +91 90389 76363.`,
      alternates: { canonical: `https://hotzarina.in/spa-center-in-${location.slug}` },
      openGraph: {
        title: `SPA Center in ${location.name} | Body Massage Services`,
        description: `Premium SPA center in ${location.name} — full body massage, couple spa, Nuru & happy ending. 24/7 available. Call +91 90389 76363.`,
        url: `https://hotzarina.in/spa-center-in-${location.slug}`,
        siteName: "Hotzarina",
        locale: "en_IN",
        type: "website",
        images: [{ url: `https://hotzarina.in${locationImage(location.slug)}`, width: 1200, height: 630, alt: `SPA Center in ${location.name}` }],
      },
      twitter: {
        card: "summary_large_image",
        title: `SPA Center in ${location.name} | Massage & Body Spa 24/7 | Hotzarina`,
        description: `Premium SPA center in ${location.name} — full body massage, couple spa, Nuru & happy ending. 24/7 available.`,
        images: [`https://hotzarina.in${locationImage(location.slug)}`],
      },
    };
  }

  if (slug.startsWith("male-escorts-in-")) {
    const locationSlug = slug.replace("male-escorts-in-", "");
    const location = getLocationBySlug(locationSlug);
    if (!location) return { title: "Not Found" };
    return {
      title: `Male Escorts in ${location.name} | Male Companions 24/7 | Hotzarina`,
      description: `Premium male escorts in ${location.name}. Handsome, verified male companions for female clients, couples & LGBTQ+. Incall & outcall available 24/7. Call +91 90389 76363.`,
      alternates: { canonical: `https://hotzarina.in/male-escorts-in-${location.slug}` },
      openGraph: {
        title: `Male Escorts in ${location.name} | Verified Male Companions`,
        description: `Book premium male escorts in ${location.name}. 100% verified, discreet, available 24/7 for incall & outcall. Call +91 90389 76363.`,
        url: `https://hotzarina.in/male-escorts-in-${location.slug}`,
        siteName: "Hotzarina",
        locale: "en_IN",
        type: "website",
        images: [{ url: `https://hotzarina.in${locationImage(location.slug)}`, width: 1200, height: 630, alt: `Male Escorts in ${location.name}` }],
      },
      twitter: {
        card: "summary_large_image",
        title: `Male Escorts in ${location.name} | Male Companions 24/7 | Hotzarina`,
        description: `Book premium male escorts in ${location.name}. 100% verified, discreet, available 24/7 for incall & outcall.`,
        images: [`https://hotzarina.in${locationImage(location.slug)}`],
      },
    };
  }

  const service = getServiceBySlug(slug);
  if (!service) return { title: "Not Found" };
  return {
    title: `${service.name} in Mumbai | Book ${service.name} 24/7 | Zarina`,
    description: `Book ${service.name} in Mumbai 24/7. 100% verified, discreet service. Premium ${service.name.toLowerCase()} available across all Mumbai locations. Call +91 90389 76363.`,
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
    const nearbyLocations = [
      ...locations.filter((l) => l.slug !== locationSlug && l.city === location.city),
      ...locations.filter((l) => l.slug !== locationSlug && l.state === location.state && l.city !== location.city),
      ...locations.filter((l) => l.slug !== locationSlug && l.state !== location.state),
    ].slice(0, 12);

    const locationJsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `https://hotzarina.in/escorts-in-${location.slug}#org`,
          name: `Zarina Escorts ${location.name}`,
          description: `Premium verified escorts in ${location.name}. 100% genuine call girls available 24/7 for incall & outcall. ${location.reviewCount}+ satisfied clients.`,
          url: `https://hotzarina.in/escorts-in-${location.slug}`,
          telephone: "+91-90389-76363",
          image: `https://hotzarina.in${locationImage(location.slug)}`,
          address: {
            "@type": "PostalAddress",
            addressLocality: location.city,
            addressRegion: location.state,
            postalCode: location.postalCode,
            addressCountry: "IN",
          },
          areaServed: { "@type": "City", name: location.name },
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

    const heroImg = locationImage(locationSlug);
    ReactDOM.preload(heroImg, { as: "image", fetchPriority: "high" });

    return (
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationJsonLd) }} />
        {/* Hero */}
        <section className="hero" style={{ background: `linear-gradient(rgba(128,0,128,0.75),rgba(128,0,128,0.75)), url('${heroImg}') center/cover no-repeat` }}>
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
                    src={serviceImage(svc.slug)}
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
                    src={locationImage(loc.slug)}
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

        <FAQSection faqs={faqs} location={location.name} type="escorts" />
      </main>
    );
  }

  // SPA Center page: spa-center-in-[location]
  if (slug.startsWith("spa-center-in-")) {
    const locationSlug = slug.replace("spa-center-in-", "");
    const location = getLocationBySlug(locationSlug);
    if (!location) notFound();

    const spaFaqs = defaultSpaFAQs(location.name);
    const nearbySpaLocations = [
      ...locations.filter((l) => l.slug !== locationSlug && l.city === location.city),
      ...locations.filter((l) => l.slug !== locationSlug && l.state === location.state && l.city !== location.city),
      ...locations.filter((l) => l.slug !== locationSlug && l.state !== location.state),
    ].slice(0, 12);

    const spaJsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `https://hotzarina.in/spa-center-in-${location.slug}#org`,
          name: `Hotzarina SPA Center ${location.name}`,
          description: `Premium SPA center in ${location.name}. Full body massage, Swedish massage, deep tissue, aromatherapy, body-to-body, Nuru & happy ending massage. 100% private, hygienic & discreet.`,
          url: `https://hotzarina.in/spa-center-in-${location.slug}`,
          telephone: "+91-90389-76363",
          address: {
            "@type": "PostalAddress",
            addressLocality: location.city,
            addressRegion: location.state,
            postalCode: location.postalCode,
            addressCountry: "IN",
          },
          areaServed: { "@type": "City", name: location.name },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://hotzarina.in" },
            { "@type": "ListItem", position: 2, name: "SPA Centers", item: "https://hotzarina.in/location" },
            { "@type": "ListItem", position: 3, name: `SPA Center in ${location.name}`, item: `https://hotzarina.in/spa-center-in-${location.slug}` },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: spaFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        },
      ],
    };

    const spaHeroImg = locationImage(locationSlug);
    ReactDOM.preload(spaHeroImg, { as: "image", fetchPriority: "high" });

    return (
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(spaJsonLd) }} />

        {/* Hero */}
        <section className="hero" style={{ background: `linear-gradient(rgba(128,0,32,0.80),rgba(80,0,80,0.80)), url('${spaHeroImg}') center/cover no-repeat` }}>
          <div className="container">
            <div className="hero-content">
              <h1>SPA Center in {location.name} — Premium Massage &amp; Body Spa Services 24/7</h1>
              <p>Welcome to {location.name}&apos;s #1 SPA center! Full body massage, Swedish massage, body-to-body, Nuru, couple spa &amp; happy ending massage by certified therapists. 100% private, hygienic &amp; discreet. Serving {location.areas.slice(0, 3).join(', ')} and all areas of {location.name}, {location.state}.</p>
              <div className="hero-buttons">
                <a href="tel:+919038976363" className="btn btn-primary">📞 Book SPA — +91 90389 76363</a>
                <a href="https://wa.me/919038976363" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">💬 WhatsApp Now</a>
              </div>
            </div>
          </div>
        </section>

        {/* Instant Contact */}
        <section className="contact-instant">
          <div className="container">
            <h2>Best SPA Center in {location.name} — Book Your Massage Now</h2>
            <p>
              Looking for a trusted <strong>SPA center in {location.name}</strong>? We offer premium body massage, couple spa, aromatherapy, deep tissue, Nuru &amp; happy ending massage in {location.name}. All sessions are in private rooms by <strong>certified massage therapists</strong>. Available 24/7 across {location.areas.join(', ')}. Incall &amp; home-visit outcall both available.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '1rem 0' }}>
              {['Full Body Massage', 'Body-to-Body Massage', 'Nuru Massage', 'Happy Ending Massage', 'Swedish Massage', 'Couple Massage'].map((tag) => (
                <span key={tag} style={{ background: '#f3e8ff', color: '#800080', padding: '0.35rem 0.85rem', borderRadius: '20px', fontSize: '0.83rem', border: '1px solid #d8b4fe' }}>{tag}</span>
              ))}
            </div>
            <div className="contact-buttons">
              <a href="tel:+919038976363" className="btn btn-call">📞 Call Now</a>
              <a href="https://wa.me/919038976363" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        {/* SPA Services Grid */}
        <section className="home-services-section">
          <div className="container">
            <h2>Our Massage &amp; SPA Services in {location.name}</h2>
            <p className="section-subtitle">Choose from 12+ professional massage therapies at our {location.name} SPA center. All services are performed by trained, certified therapists in fully private rooms.</p>
            <div className="services-grid">
              {spaServices.map((svc, idx) => (
                <div key={idx} className="service-card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>{svc.icon}</div>
                  <div className="service-info">
                    <h3>{svc.name}</h3>
                    <p style={{ fontSize: '0.88rem', color: '#555', margin: '0.5rem 0 1rem' }}>{svc.description}</p>
                    <div className="service-details">
                      <span className="detail-item">📍 {location.name}</span>
                      <span className="detail-item">⏰ 24/7</span>
                    </div>
                    <div className="service-stats">
                      <div className="stat"><strong>Privacy</strong><span>100%</span></div>
                      <div className="stat"><strong>Avail.</strong><span>24/7</span></div>
                      <div className="stat"><strong>Rating</strong><span>5.0★</span></div>
                    </div>
                    <a href="tel:+919038976363" className="btn-service">Book {svc.name}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="about-section">
          <div className="container">
            <h2>Why Choose Our SPA Center in {location.name}?</h2>
            <div className="about-grid">
              <div className="about-item">
                <h3>Certified Therapists in {location.name}</h3>
                <p>Every therapist at our {location.name} SPA center is professionally trained and certified with 2+ years of experience. Expert in Swedish, deep tissue, Thai, Nuru, and body-to-body massage techniques.</p>
              </div>
              <div className="about-item">
                <h3>100% Private &amp; Hygienic Rooms</h3>
                <p>All massage sessions are conducted in fully private, air-conditioned rooms. Fresh linen per client, sanitized equipment, and strict hygiene protocols. Complete discretion guaranteed.</p>
              </div>
              <div className="about-item">
                <h3>24/7 Availability — Incall &amp; Outcall</h3>
                <p>Our {location.name} SPA is open round the clock. Book a session at our center (incall) or have our therapist visit your hotel or home (outcall) across {location.areas.slice(0,3).join(', ')} and all {location.name} areas.</p>
              </div>
              <div className="about-item">
                <h3>{location.reviewCount}+ Happy Clients in {location.name}</h3>
                <p>Over {location.reviewCount} satisfied clients in {location.name} have rated our SPA services 4.9/5. We are the most trusted massage and SPA center in {location.name}, {location.state}.</p>
              </div>
            </div>
          </div>
        </section>

        {/* In-depth Content for SEO */}
        <section className="content-section">
          <div className="container">
            <h2>Complete Guide to SPA Centers in {location.name}</h2>
            <div className="content-wrapper">
              <p>
                Welcome to the most trusted <strong>SPA center in {location.name}</strong>. We provide world-class <strong>body massage in {location.name}</strong> including full body massage, Swedish massage, deep tissue massage, aromatherapy, hot stone massage, Thai massage, body-to-body massage, Nuru massage, and happy ending massage — all available 24/7.
              </p>
              <h3>Best Massage Services Available in {location.name}</h3>
              <p>
                Our <strong>{location.name} SPA center</strong> is renowned for its premium massage therapies. The most popular services in {location.name} are full body massage, body-to-body massage, Nuru massage, and happy ending massage. All sessions are private, hygienic, and performed by certified therapists. We serve {location.areas.join(', ')} and all parts of {location.name}.
              </p>
              <h3>Outcall &amp; Home Visit Massage in {location.name}</h3>
              <p>
                Can&apos;t visit our SPA center? No problem! We offer <strong>home visit massage in {location.name}</strong> and hotel visit massage services. Our therapist brings all equipment to your location. Available 24/7 across all {location.name} areas — call <strong>+91 90389 76363</strong> to book an outcall session.
              </p>
              <h3>How to Book SPA Session in {location.name}</h3>
              <p>
                Booking is simple: Call or WhatsApp <strong>+91 90389 76363</strong>. Choose your service (full body, body-to-body, Nuru, Swedish, or couple massage), share your location in {location.name} and preferred time. We confirm instantly and arrange a therapist within 30–60 minutes.
              </p>
              <h3>Also Explore Our Escort Service in {location.name}</h3>
              <p>
                Looking for companionship along with your SPA experience? Check our{' '}
                <Link href={`/escorts-in-${location.slug}`} style={{ color: '#800080', fontWeight: 600 }}>
                  escorts in {location.name}
                </Link>{' '}
                — premium verified call girls available 24/7 for incall &amp; outcall across all {location.name} areas.
              </p>
              <h3>SPA Centers in Nearby Locations</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.75rem' }}>
                {nearbySpaLocations.slice(0, 16).map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/spa-center-in-${loc.slug}`}
                    style={{ background: '#f3e8ff', color: '#800080', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.84rem', textDecoration: 'none', border: '1px solid #d8b4fe' }}
                  >
                    SPA in {loc.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nearby SPA Locations */}
        <section className="home-locations-section">
          <div className="container">
            <h2>SPA Centers in Nearby Locations</h2>
            <p className="section-subtitle">Explore our SPA centers across all nearby areas. Professional massage &amp; body spa services everywhere near {location.name}.</p>
            <div className="locations-grid">
              {nearbySpaLocations.map((loc) => (
                <div key={loc.slug} className="location-card">
                  <Image
                    src={locationImage(loc.slug)}
                    alt={"SPA Center in " + loc.name}
                    width={350}
                    height={350}
                    loading="lazy"
                  />
                  <div className="location-info">
                    <Link href={"/spa-center-in-" + loc.slug} className="btn-location">SPA in {loc.name}</Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="view-all-btn">
              <Link href="/location" className="btn btn-primary">View All Locations</Link>
            </div>
          </div>
        </section>

        {/* Cross-link to Escorts Page */}
        <section className="contact-instant" style={{ background: '#1a0a2e' }}>
          <div className="container" style={{ color: '#fff' }}>
            <h2 style={{ color: '#fff' }}>Also Available — Escorts in {location.name}</h2>
            <p style={{ color: '#e2d4f0' }}>
              Along with our SPA services, we offer premium <strong>escort services in {location.name}</strong>. 100% verified call girls available 24/7 for incall &amp; outcall. {location.reviewCount}+ satisfied clients in {location.name}.
            </p>
            <div className="contact-buttons">
              <Link href={`/escorts-in-${location.slug}`} className="btn btn-primary">View Escorts in {location.name}</Link>
              <a href="tel:+919038976363" className="btn btn-call">📞 Call Now</a>
            </div>
          </div>
        </section>

        <FAQSection faqs={spaFaqs} location={location.name} type="spa" />
      </main>
    );
  }


  // Male Escort page: male-escorts-in-[location]
  if (slug.startsWith("male-escorts-in-")) {
    const locationSlug = slug.replace("male-escorts-in-", "");
    const location = getLocationBySlug(locationSlug);
    if (!location) notFound();

    const maleFaqs = defaultMaleEscortFAQs(location.name);
    const nearbyLocations = [
      ...locations.filter((l) => l.slug !== locationSlug && l.city === location.city),
      ...locations.filter((l) => l.slug !== locationSlug && l.state === location.state && l.city !== location.city),
      ...locations.filter((l) => l.slug !== locationSlug && l.state !== location.state),
    ].slice(0, 12);

    const maleJsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `https://hotzarina.in/male-escorts-in-${location.slug}#org`,
          name: `Hotzarina Male Escorts ${location.name}`,
          description: `Premium male escorts in ${location.name}. Verified, handsome male companions for female clients, couples & LGBTQ+. 100% discreet. Available 24/7.`,
          url: `https://hotzarina.in/male-escorts-in-${location.slug}`,
          telephone: "+91-90389-76363",
          address: {
            "@type": "PostalAddress",
            addressLocality: location.city,
            addressRegion: location.state,
            postalCode: location.postalCode,
            addressCountry: "IN",
          },
          areaServed: { "@type": "City", name: location.name },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://hotzarina.in" },
            { "@type": "ListItem", position: 2, name: "Male Escorts", item: "https://hotzarina.in/location" },
            { "@type": "ListItem", position: 3, name: `Male Escorts in ${location.name}`, item: `https://hotzarina.in/male-escorts-in-${location.slug}` },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: maleFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        },
      ],
    };

    const maleHeroImg = locationImage(locationSlug);
    ReactDOM.preload(maleHeroImg, { as: "image", fetchPriority: "high" });

    return (
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(maleJsonLd) }} />

        {/* Hero */}
        <section className="hero" style={{ background: `linear-gradient(rgba(20,0,60,0.82),rgba(80,0,80,0.80)), url('${maleHeroImg}') center/cover no-repeat` }}>
          <div className="container">
            <div className="hero-content">
              <h1>Male Escorts in {location.name} — Verified Handsome Male Companions 24/7</h1>
              <p>Welcome to {location.name}&apos;s #1 male escort service! Premium, verified, and handsome male companions available for female clients, couples &amp; LGBTQ+ clients. Incall &amp; outcall across {location.areas.slice(0, 3).join(', ')} and all {location.name} areas.</p>
              <div className="hero-buttons">
                <a href="tel:+919038976363" className="btn btn-primary">📞 Book Male Escort — +91 90389 76363</a>
                <a href="https://wa.me/919038976363" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">💬 WhatsApp Now</a>
              </div>
            </div>
          </div>
        </section>

        {/* Instant Contact */}
        <section className="contact-instant">
          <div className="container">
            <h2>Best Male Escorts in {location.name} — Book Now</h2>
            <p>
              Looking for a premium <strong>male escort in {location.name}</strong>? We provide handsome, verified male companions for <strong>female clients, couples &amp; LGBTQ+</strong> clients. Incall at our private location or outcall to your hotel/home across {location.areas.join(', ')}. Available 24/7 — completely discreet.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '1rem 0' }}>
              {['Dinner Date', 'Hotel Visit', 'Home Visit', 'Travel Companion', 'Party Escort', 'Private Sessions'].map((tag) => (
                <span key={tag} style={{ background: '#ede9fe', color: '#4c1d95', padding: '0.35rem 0.85rem', borderRadius: '20px', fontSize: '0.83rem', border: '1px solid #c4b5fd' }}>{tag}</span>
              ))}
            </div>
            <div className="contact-buttons">
              <a href="tel:+919038976363" className="btn btn-call">📞 Call Now</a>
              <a href="https://wa.me/919038976363" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="about-section">
          <div className="container">
            <h2>Why Choose Our Male Escorts in {location.name}?</h2>
            <div className="about-grid">
              <div className="about-item">
                <h3>100% Verified Male Escorts in {location.name}</h3>
                <p>Every male escort in {location.name} is rigorously verified with real photos and background checks. No fake profiles — what you see is what you get. Handsome, well-groomed, and professionally trained companions.</p>
              </div>
              <div className="about-item">
                <h3>Available for Female Clients, Couples &amp; LGBTQ+</h3>
                <p>Our male escorts in {location.name} serve all clients — female clients seeking male companionship, couples looking for a third, and LGBTQ+ clients. We are inclusive, non-judgmental, and completely professional.</p>
              </div>
              <div className="about-item">
                <h3>24/7 Incall &amp; Outcall — All {location.name} Areas</h3>
                <p>Available round the clock. Visit our private incall location or book an outcall to your hotel or home in {location.areas.slice(0,3).join(', ')} and all areas of {location.name}. Confirmed within 30 minutes.</p>
              </div>
              <div className="about-item">
                <h3>{location.reviewCount}+ Happy Clients in {location.name}</h3>
                <p>Over {location.reviewCount} satisfied clients in {location.name} have rated our male escort service 4.9/5. We are the most trusted male escort agency in {location.name}, {location.state}.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="content-section">
          <div className="container">
            <h2>Complete Guide to Male Escorts in {location.name}</h2>
            <div className="content-wrapper">
              <p>
                Welcome to the most trusted <strong>male escort service in {location.name}</strong>. We provide premium, verified male companions for female clients, couples, and LGBTQ+ individuals across all areas of {location.name} — including {location.areas.join(', ')}. Available 24/7 for incall and outcall.
              </p>
              <h3>What Services Do Male Escorts in {location.name} Offer?</h3>
              <p>
                Our <strong>male escorts in {location.name}</strong> offer a range of professional companion services: dinner dates, party escort, travel companionship, hotel visits, home visits, and private sessions. All services are fully discreet, hygienic, and professional. Our male companions are trained to make you feel comfortable and special.
              </p>
              <h3>How to Book a Male Escort in {location.name}</h3>
              <p>
                Booking a <strong>male escort in {location.name}</strong> is simple and discreet. Call or WhatsApp <strong>+91 90389 76363</strong>. Tell us your preferred male companion type, service required, and your location in {location.name}. We confirm instantly and arrange a companion within 30–60 minutes.
              </p>
              <h3>Male Escort Rates in {location.name}</h3>
              <p>
                Our male escort rates in {location.name} are competitive and transparent — no hidden charges. We offer short 2-hour sessions, 4-hour bookings, overnight, and custom packages. Call <strong>+91 90389 76363</strong> for current pricing and availability.
              </p>
              <h3>Also Explore — Female Escorts in {location.name}</h3>
              <p>
                Looking for female escorts too? Visit our{' '}
                <Link href={`/escorts-in-${location.slug}`} style={{ color: '#800080', fontWeight: 600 }}>
                  escorts in {location.name}
                </Link>{' '}
                page — 100% verified call girls available 24/7 for incall &amp; outcall across all {location.name} areas.
              </p>
              <h3>Male Escorts in Nearby Locations</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.75rem' }}>
                {nearbyLocations.slice(0, 16).map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/male-escorts-in-${loc.slug}`}
                    style={{ background: '#ede9fe', color: '#4c1d95', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.84rem', textDecoration: 'none', border: '1px solid #c4b5fd' }}
                  >
                    Male Escorts in {loc.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Locations Grid */}
        <section className="home-locations-section">
          <div className="container">
            <h2>Male Escorts in Nearby Locations</h2>
            <p className="section-subtitle">Explore our male escort services across all nearby areas. Verified male companions everywhere near {location.name}.</p>
            <div className="locations-grid">
              {nearbyLocations.map((loc) => (
                <div key={loc.slug} className="location-card">
                  <Image
                    src={locationImage(loc.slug)}
                    alt={"Male Escorts in " + loc.name}
                    width={350}
                    height={350}
                    loading="lazy"
                  />
                  <div className="location-info">
                    <Link href={"/male-escorts-in-" + loc.slug} className="btn-location">Male Escorts in {loc.name}</Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="view-all-btn">
              <Link href="/location" className="btn btn-primary">View All Locations</Link>
            </div>
          </div>
        </section>

        {/* Cross-links */}
        <section className="contact-instant" style={{ background: '#1a0a2e' }}>
          <div className="container" style={{ color: '#fff' }}>
            <h2 style={{ color: '#fff' }}>Also Available in {location.name}</h2>
            <p style={{ color: '#e2d4f0' }}>
              Along with male escorts, we offer premium <strong>female escorts</strong> and <strong>SPA center services</strong> in {location.name}. 100% verified, available 24/7.
            </p>
            <div className="contact-buttons">
              <Link href={`/escorts-in-${location.slug}`} className="btn btn-primary">Female Escorts in {location.name}</Link>
              <Link href={`/spa-center-in-${location.slug}`} className="btn btn-secondary">SPA Center in {location.name}</Link>
              <a href="tel:+919038976363" className="btn btn-call">📞 Call Now</a>
            </div>
          </div>
        </section>

        <FAQSection faqs={maleFaqs} location={location.name} type="male-escorts" />
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
          "@type": "Organization",
          name: "Zarina Escorts Mumbai",
          telephone: "+91-90389-76363",
          url: "https://hotzarina.in",
        },
        areaServed: { "@type": "City", name: "Mumbai" },
        url: `https://hotzarina.in/${service.slug}`,
        image: `https://hotzarina.in${serviceImage(service.slug)}`,
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

  const serviceHeroImg = serviceImage(service.slug);
  ReactDOM.preload(serviceHeroImg, { as: "image", fetchPriority: "high" });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      {/* Hero */}
      <section className="hero" style={{ background: `linear-gradient(rgba(128,0,128,0.8),rgba(128,0,128,0.8)), url('${serviceHeroImg}') center/cover no-repeat` }}>
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
                  src={locationImage(loc.slug)}
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
