'use client';

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `New Booking Inquiry:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/919038976363?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '12px', padding: '2rem', textAlign: 'center' }}>
        <p style={{ fontSize: '2rem', marginBottom: '1rem' }}>✅</p>
        <h3 style={{ color: '#16a34a', marginBottom: '0.5rem' }}>Inquiry Sent!</h3>
        <p style={{ color: '#555' }}>Your inquiry has been forwarded to our WhatsApp. Our team will confirm your booking shortly.</p>
        <button onClick={() => setSubmitted(false)} style={{ marginTop: '1rem', background: '#800080', color: 'white', border: 'none', borderRadius: '8px', padding: '0.75rem 1.5rem', cursor: 'pointer', fontSize: '1rem' }}>Send Another Inquiry</button>
      </div>
    );
  }

  return (
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
  );
}
