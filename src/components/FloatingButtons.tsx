'use client';

import { useEffect, useState } from 'react';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.pageYOffset > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Buttons - Right side (WhatsApp + Telegram) */}
      <div className="floating-buttons-right">
        <a
          href="https://wa.me/919038976363"
          className="floating-btn whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Chat"
          style={{ background: '#25d366' }}
        >
          <span className="floating-btn-label">WhatsApp Chat</span>
          <svg viewBox="0 0 32 32" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
            <path fill="white" d="M16 0C7.164 0 0 7.163 0 16c0 2.8.729 5.53 2.118 7.933L0 32l8.241-2.072A15.938 15.938 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm9.484 22.394c-.393 1.105-1.946 2.03-3.18 2.295-.848.176-1.954.318-5.674-1.217-4.766-1.967-7.839-6.783-8.077-7.093-.233-.31-1.917-2.55-1.917-4.865 0-2.315 1.215-3.453 1.646-3.923.43-.47.942-.589 1.255-.589.314 0 .627.006.902.017.289.012.676-.11 1.057.807.393.944 1.337 3.26 1.453 3.495.116.235.194.509.039.82-.155.311-.232.505-.465.778-.232.273-.488.61-.698.819-.232.233-.474.483-.204.95.27.467 1.201 1.98 2.578 3.206 1.773 1.578 3.267 2.067 3.729 2.301.462.235.733.196 1.003-.117.27-.313 1.16-1.353 1.469-1.817.31-.465.62-.388.99-.233.371.155 2.353 1.11 2.757 1.312.404.203.674.31.772.466.097.155.097.892-.296 1.997z" />
          </svg>
        </a>
        <a
          href="https://t.me/hotzarinain"
          className="floating-btn telegram-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram Chat"
        >
          <span className="floating-btn-label">Telegram Chat</span>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path fill="white" d="M16 0C7.164 0 0 7.164 0 16c0 8.837 7.164 16 16 16s16-7.163 16-16c0-8.836-7.164-16-16-16zm7.348 10.796l-2.629 12.389c-.197.848-.712 1.059-1.445.66l-3.996-2.945-1.927 1.854c-.213.213-.392.392-.804.392l.287-4.084 7.428-6.711c.323-.287-.07-.446-.502-.159l-9.177 5.779-3.958-1.238c-.86-.27-.878-.861.18-1.273l15.477-5.966c.717-.267 1.343.16 1.066 1.302z" />
          </svg>
        </a>
      </div>

      {/* Floating Button - Left side (Call) */}
      <div className="floating-buttons-left">
        <a
          href="tel:+919038976363"
          className="floating-btn call-btn-1"
          aria-label="Call Now"
        >
          <span className="floating-btn-label-left">Call +91 90389 76363</span>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="white" d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
          </svg>
        </a>
      </div>

      {/* Back to Top */}
      {showTop && (
        <a href="#" className="back-to-top visible" onClick={scrollToTop} aria-label="Back to top">
          ↑
        </a>
      )}
    </>
  );
}
