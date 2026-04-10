'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  location?: string;
}

export default function FAQSection({ faqs, location = 'Mumbai' }: FAQSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (i: number) => setActiveIndex(activeIndex === i ? null : i);

  const half = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, half);
  const rightFaqs = faqs.slice(half);

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-header">
          <h2>Frequently Asked Questions - Escorts in {location}</h2>
          <p>Everything you need to know about our escort services in {location}</p>
        </div>
        <div className="faq-grid">
          <div className="faq-column">
            {leftFaqs.map((faq, i) => (
              <div key={i} className={activeIndex === i ? 'faq-item active' : 'faq-item'}>
                <div className="faq-question" onClick={() => toggle(i)}>
                  <h3>{faq.question}</h3>
                  <span className="faq-toggle">+</span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="faq-column">
            {rightFaqs.map((faq, i) => {
              const idx = i + half;
              return (
                <div key={idx} className={activeIndex === idx ? 'faq-item active' : 'faq-item'}>
                  <div className="faq-question" onClick={() => toggle(idx)}>
                    <h3>{faq.question}</h3>
                    <span className="faq-toggle">+</span>
                  </div>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="faq-cta">
          <h3>Ready to Book?</h3>
          <p>Contact us now for instant booking and 24/7 service in {location}</p>
          <div className="faq-cta-buttons">
            <a href="tel:+919038976363" className="btn btn-call">📞 Call Now</a>
            <a href="https://wa.me/919038976363" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}
