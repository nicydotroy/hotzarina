import type { Metadata } from "next";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import { defaultFAQs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us | Book Mumbai Escorts 24/7 | Call +91 90389 76363",
  description:
    "Book premium escorts in Mumbai instantly. Call, WhatsApp, or Telegram +91 90389 76363. Booking confirmed in 15 minutes. 100% discreet, 24/7 available.",
  alternates: { canonical: "https://hotzarina.in/contact" },
  openGraph: {
    title: "Contact Us | Book Mumbai Escorts 24/7",
    description:
      "Book premium escorts in Mumbai instantly. Call or WhatsApp +91 90389 76363. 15-minute booking confirmation.",
    url: "https://hotzarina.in/contact",
    images: [{ url: "/images/escorts-in-mumbai-banner.webp", width: 1200, height: 630, alt: "Contact Zarina Escorts Mumbai" }],
  },
};

const contactFAQs = [
  { question: "How do I book an escort in Mumbai?", answer: "Booking is simple! Browse our profiles, then call us at +91 90389 76363 or WhatsApp/Telegram. Tell us your preferred companion, location, and time. We'll confirm availability and complete your booking within minutes." },
  { question: "How quickly can I get an escort?", answer: "We offer same-day and express booking. Most bookings are confirmed within 15-30 minutes. For immediate requirements, call us directly for the fastest response." },
  { question: "Is the booking process discreet?", answer: "Absolutely. We handle all bookings with complete discretion and confidentiality. No information is ever shared with third parties. All communications are secure and private." },
  { question: "What areas do you cover?", answer: "We cover all of Mumbai including Andheri, Bandra, Juhu, Colaba, Powai, Worli, Lower Parel, Thane, Navi Mumbai, and 100+ more locations. We also serve major Indian cities like Delhi, Bangalore, and Chennai." },
  { question: "What payment methods do you accept?", answer: "We accept cash and online bank transfers. Payment details are provided upon booking confirmation. We believe in transparent pricing with no hidden charges." },
  { question: "Can I see real photos before booking?", answer: "Yes! All profiles on our gallery page feature 100% real, recently verified photos. What you see is exactly what you get - no fake profiles, guaranteed." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://hotzarina.in/#business",
      name: "Zarina Escorts Mumbai",
      url: "https://hotzarina.in",
      telephone: "+91-90389-76363",
      email: "contact@hotzarina.in",
      image: "https://hotzarina.in/images/escorts-in-mumbai-banner.webp",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Mumbai",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 19.076,
        longitude: 72.8777,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
      priceRange: "₹₹₹",
      sameAs: ["https://wa.me/919038976363", "https://t.me/hotzarinain"],
    },
    {
      "@type": "ContactPage",
      "@id": "https://hotzarina.in/contact",
      name: "Contact Us – Book Mumbai Escorts",
      url: "https://hotzarina.in/contact",
      description: "Contact Zarina Escorts Mumbai to book premium escorts. Available 24/7 via phone, WhatsApp, and Telegram.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://hotzarina.in" },
          { "@type": "ListItem", position: 2, name: "Contact", item: "https://hotzarina.in/contact" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: contactFAQs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function ContactPage() {
  const faqs = defaultFAQs("Mumbai");

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="hero" style={{ background: "linear-gradient(rgba(128,0,128,0.8),rgba(128,0,128,0.8)), url('/images/escorts-in-mumbai-banner.webp') center/cover no-repeat" }}>
        <div className="container">
          <div className="hero-content">
            <h1>Contact Us - Book Premium Escorts in Mumbai</h1>
            <p>Ready to book your perfect companion? Contact us now for instant booking confirmation. Available 24/7 via phone, WhatsApp, and Telegram. Mumbai&apos;s most trusted escort service since 2020.</p>
            <div className="hero-buttons">
              <a href="tel:+919038976363" className="btn btn-primary">📞 Call us at +91 90389 76363</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
            {/* Contact Form */}
            <div>
              <h2 style={{ color: '#800080', marginBottom: '0.5rem' }}>Send Us a Booking Inquiry</h2>
              <p style={{ color: '#555', marginBottom: '1.5rem' }}>Fill in your details and we&apos;ll get back to you instantly via WhatsApp.</p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 style={{ color: '#800080', marginBottom: '0.5rem' }}>Direct Contact Options</h2>
              <p style={{ color: '#555', marginBottom: '1.5rem' }}>Prefer to contact us directly? Reach us through any of these instant channels available 24/7.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a href="tel:+919038976363" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#f3e8ff', padding: '1.25rem', borderRadius: '12px', textDecoration: 'none', color: '#333', transition: 'background 0.2s' }}>
                  <span style={{ fontSize: '2rem' }}>📞</span>
                  <div>
                    <strong style={{ display: 'block', color: '#800080' }}>Call Us Now</strong>
                    <span>+91 90389 76363</span>
                    <small style={{ display: 'block', color: '#888' }}>Available 24/7, instant response</small>
                  </div>
                </a>
                <a href="https://wa.me/919038976363" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#dcfce7', padding: '1.25rem', borderRadius: '12px', textDecoration: 'none', color: '#333', transition: 'background 0.2s' }}>
                  <span style={{ fontSize: '2rem' }}>💬</span>
                  <div>
                    <strong style={{ display: 'block', color: '#16a34a' }}>WhatsApp Us</strong>
                    <span>+91 90389 76363</span>
                    <small style={{ display: 'block', color: '#888' }}>Send profile requests, photos, queries</small>
                  </div>
                </a>
                <a href="https://t.me/hotzarinain" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#dbeafe', padding: '1.25rem', borderRadius: '12px', textDecoration: 'none', color: '#333', transition: 'background 0.2s' }}>
                  <span style={{ fontSize: '2rem' }}>✈️</span>
                  <div>
                    <strong style={{ display: 'block', color: '#1d4ed8' }}>Telegram</strong>
                    <span>@hotzarinain</span>
                    <small style={{ display: 'block', color: '#888' }}>Anonymous &amp; secure messaging</small>
                  </div>
                </a>
                <a href="mailto:contact@hotzarina.in" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#fce7f3', padding: '1.25rem', borderRadius: '12px', textDecoration: 'none', color: '#333', transition: 'background 0.2s' }}>
                  <span style={{ fontSize: '2rem' }}>📧</span>
                  <div>
                    <strong style={{ display: 'block', color: '#be185d' }}>Email Us</strong>
                    <span>contact@hotzarina.in</span>
                    <small style={{ display: 'block', color: '#888' }}>For detailed inquiries and bookings</small>
                  </div>
                </a>
              </div>

              {/* Business Hours */}
              <div style={{ marginTop: '1.5rem', background: '#faf5ff', border: '2px solid #e9d5ff', borderRadius: '12px', padding: '1.25rem' }}>
                <h3 style={{ color: '#800080', marginBottom: '0.75rem' }}>⏰ Our Hours</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <span style={{ color: '#555' }}>Phone/WhatsApp</span>
                  <strong>24/7 Available</strong>
                  <span style={{ color: '#555' }}>Telegram</span>
                  <strong>24/7 Available</strong>
                  <span style={{ color: '#555' }}>Email Response</span>
                  <strong>Within 2 Hours</strong>
                  <span style={{ color: '#555' }}>Booking Confirmation</span>
                  <strong>Within 15 Mins</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website on Rent Section */}
      <section className="about-section" style={{ background: 'linear-gradient(135deg, #f3e8ff, #fce7f3)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', color: '#800080', marginBottom: '1rem' }}>Want a Website Like This? We Offer Website on Rent!</h2>
          <p style={{ textAlign: 'center', color: '#555', maxWidth: '700px', margin: '0 auto 2rem' }}>Looking to start your own escorts service website? We provide fully customized escort websites with all features - SEO optimized, mobile responsive, and ready to use. Contact us for pricing and plans.</p>
          <div className="about-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            <div className="about-item" style={{ textAlign: 'center' }}>
              <h3>🌐 Full Website</h3>
              <p>Complete escort website with all pages, SEO setup, and booking system. Mobile responsive design.</p>
            </div>
            <div className="about-item" style={{ textAlign: 'center' }}>
              <h3>🔍 SEO Ready</h3>
              <p>Pre-optimized for Google ranking with proper metadata, sitemaps, and keyword optimization.</p>
            </div>
            <div className="about-item" style={{ textAlign: 'center' }}>
              <h3>✏️ Customizable</h3>
              <p>Fully customizable with your branding, contact details, city/location, and companion profiles.</p>
            </div>
            <div className="about-item" style={{ textAlign: 'center' }}>
              <h3>💰 Affordable</h3>
              <p>Budget-friendly monthly rental plans. No upfront development costs. Cancel anytime.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="https://wa.me/919038976363?text=I%20am%20interested%20in%20website%20on%20rent%20for%20escorts%20service" target="_blank" rel="noopener noreferrer" className="btn btn-primary">💬 Inquire About Website on Rent</a>
          </div>
        </div>
      </section>

      {/* Contact FAQs */}
      <section className="home-services-section">
        <div className="container">
          <h2>Frequently Asked Questions About Booking</h2>
          <p className="section-subtitle">Everything you need to know about booking our Mumbai escorts service.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
            {contactFAQs.map((faq, i) => (
              <div key={i} style={{ background: 'white', border: '2px solid #e9d5ff', borderRadius: '12px', padding: '1.5rem' }}>
                <h3 style={{ color: '#800080', fontSize: '1rem', marginBottom: '0.75rem' }}>{faq.question}</h3>
                <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.6' }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} location="Mumbai" />
    </main>
  );
}
