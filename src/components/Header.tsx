'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Escorts in Mumbai' },
    { href: '/services', label: 'Services' },
    { href: '/location', label: 'Location' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
    { href: '/contact', label: 'Website on Rent' },
  ];

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <Link href="/">
              <Image
                src="/images/logo.webp"
                alt="Zarina Escorts in Mumbai - Premium Call Girls Service"
                width={180}
                height={60}
                priority
              />
            </Link>
          </div>
          <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className={menuOpen ? 'hamburger active' : 'hamburger'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
}
