'use client';

import { useState } from "react";
import FAQSection from "@/components/FAQSection";
import { defaultFAQs } from "@/lib/data";

const contactFAQs = [
  { question: "How do I book an escort in Mumbai?", answer: "Booking is simple! Browse our profiles, then call us at +91 90389 76363 or WhatsApp/Telegram. Tell us your preferred companion, location, and time. We&apos;ll confirm availability and complete your booking within minutes." },
  { question: "How quickly can I get an escort?", answer: "We offer same-day and express booking. Most bookings are confirmed within 15-30 minutes. For immediate requirements, call us directly for the fastest response." },
  { question: "Is the booking process discreet?", answer: "Absolutely. We handle all bookings with complete discretion and confidentiality. No information is ever shared with third parties. All communications are secure and private." },
  { question: "What areas do you cover?", answer: "We cover all of Mumbai including Andheri, Bandra, Juhu, Colaba, Powai, Worli, Lower Parel, Thane, Navi Mumbai, and 100+ more locations. We also serve major Indian cities like Delhi, Bangalore, and Chennai." },
  { question: "What payment methods do you accept?", answer: "We accept cash and online bank transfers. Payment details are provided upon booking confirmation. We believe in transparent pricing with no hidden charges." },
  { question: "Can I see real photos before booking?", answer: "Yes! All profiles on our gallery page feature 100% real, recently verified photos. What you see is exactly what you get - no fake profiles, guaranteed." },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to WhatsApp with form data as message
    const msg = encodeURIComponent(
      `New Booking Inquiry:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/919038976363?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  const faqs = defaultFAQs('Mumbai');

  return (
    <main>
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
              {submitted ? (
                <div style={{ background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '12px', padding: '2rem', textAlign: 'center' }}>
                  <p style={{ fontSize: '2rem', marginBottom: '1rem' }}>✅</p>
                  <h3 style={{ color: '#16a34a', marginBottom: '0.5rem' }}>Inquiry Sent!</h3>
                  <p style={{ color: '#555' }}>Your inquiry has been forwarded to our WhatsApp. Our team will confirm your booking shortly.</p>
                  <button onClick={() => setSubmitted(false)} style={{ marginTop: '1rem', background: '#800080', color: 'white', border: 'none', borderRadius: '8px', padding: '0.75rem 1.5rem', cursor: 'pointer', fontSize: '1rem' }}>Send Another Inquiry</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label htmlFor="name" style={{ display: 'block', fontWeight: '600', marginBottom: '0.4rem', color: '#333' }}>Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      style={{ width: '100%', padding: '0.75rem 1rem', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '1rem', transition: 'border-color 0.2s', boxSizing: 'border-box' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" style={{ display: 'block', fontWeight: '600', marginBottom: '0.4rem', color: '#333' }}>Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      style={{ width: '100%', padding: '0.75rem 1rem', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '1rem', boxSizing: 'border-box' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" style={{ display: 'block', fontWeight: '600', marginBottom: '0.4rem', color: '#333' }}>Email (Optional)</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      style={{ width: '100%', padding: '0.75rem 1rem', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '1rem', boxSizing: 'border-box' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="service" style={{ display: 'block', fontWeight: '600', marginBottom: '0.4rem', color: '#333' }}>Service Required *</label>
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '1rem', boxSizing: 'border-box', appearance: 'none', background: 'white' }}
                    >
                      <option value="">Select a service</option>
                      <option value="VIP Escorts">VIP Escorts</option>
                      <option value="Independent Escorts">Independent Escorts</option>
                      <option value="Model Escorts">Model Escorts</option>
                      <option value="College Girls">College Girls</option>
                      <option value="Russian Escorts">Russian Escorts</option>
                      <option value="High Profile Escorts">High Profile Escorts</option>
                      <option value="Celebrity Escorts">Celebrity Escorts</option>
                      <option value="Housewife Escorts">Housewife Escorts</option>
                      <option value="Air Hostess Escorts">Air Hostess Escorts</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" style={{ display: 'block', fontWeight: '600', marginBottom: '0.4rem', color: '#333' }}>Additional Requirements</label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us your preferred location, time, duration, or any special requirements..."
                      style={{ width: '100%', padding: '0.75rem 1rem', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '1rem', resize: 'vertical', boxSizing: 'border-box' }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ fontSize: '1rem', padding: '0.9rem', cursor: 'pointer' }}
                  >
                    💬 Send via WhatsApp
                  </button>
                </form>
              )}
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
                <a href="mailto:sanjanadotsingh@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#fce7f3', padding: '1.25rem', borderRadius: '12px', textDecoration: 'none', color: '#333', transition: 'background 0.2s' }}>
                  <span style={{ fontSize: '2rem' }}>📧</span>
                  <div>
                    <strong style={{ display: 'block', color: '#be185d' }}>Email Us</strong>
                    <span>sanjanadotsingh@gmail.com</span>
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
                <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.6' }} dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} location="Mumbai" />
    </main>
  );
}
