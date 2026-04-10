import Image from 'next/image';
import Link from 'next/link';

interface Escort {
  slug: string;
  name: string;
  age: number;
  height: string;
  figure: string;
  size: string;
}

const escorts: Escort[] = [
  { slug: 'zarina', name: 'Zarina', age: 25, height: "5'6\"", figure: '34-28-36', size: 'Medium' },
  { slug: 'aarohi', name: 'Aarohi', age: 23, height: "5'5\"", figure: '32-26-34', size: 'Small' },
  { slug: 'aishani', name: 'Aishani', age: 24, height: "5'7\"", figure: '36-30-38', size: 'Large' },
  { slug: 'amayra', name: 'Amayra', age: 26, height: "5'4\"", figure: '34-26-36', size: 'Medium' },
  { slug: 'anahita', name: 'Anahita', age: 25, height: "5'6\"", figure: '36-28-38', size: 'Large' },
  { slug: 'avisha', name: 'Avisha', age: 22, height: "5'3\"", figure: '32-24-34', size: 'Small' },
  { slug: 'charvi', name: 'Charvi', age: 27, height: "5'8\"", figure: '38-30-40', size: 'Large' },
  { slug: 'devanshi', name: 'Devanshi', age: 24, height: "5'5\"", figure: '34-28-36', size: 'Medium' },
  { slug: 'eshanya', name: 'Eshanya', age: 23, height: "5'4\"", figure: '32-26-34', size: 'Small' },
  { slug: 'hrishita', name: 'Hrishita', age: 26, height: "5'7\"", figure: '36-28-38', size: 'Medium' },
  { slug: 'inayat', name: 'Inayat', age: 25, height: "5'6\"", figure: '34-26-36', size: 'Medium' },
  { slug: 'ishwarya', name: 'Ishwarya', age: 24, height: "5'5\"", figure: '36-30-38', size: 'Large' },
  { slug: 'kashmira', name: 'Kashmira', age: 27, height: "5'8\"", figure: '38-32-40', size: 'Large' },
  { slug: 'lavanya', name: 'Lavanya', age: 26, height: "5'6\"", figure: '34-28-36', size: 'Medium' },
  { slug: 'manisha', name: 'Manisha', age: 25, height: "5'4\"", figure: '32-26-34', size: 'Small' },
  { slug: 'natasha', name: 'Natasha', age: 23, height: "5'7\"", figure: '36-28-38', size: 'Medium' },
  { slug: 'nayantara', name: 'Nayantara', age: 24, height: "5'5\"", figure: '34-26-36', size: 'Medium' },
  { slug: 'raima', name: 'Raima', age: 22, height: "5'3\"", figure: '32-24-34', size: 'Small' },
  { slug: 'saanvi', name: 'Saanvi', age: 25, height: "5'6\"", figure: '36-28-38', size: 'Large' },
  { slug: 'saina', name: 'Saina', age: 23, height: "5'4\"", figure: '32-26-34', size: 'Small' },
  { slug: 'shivanya', name: 'Shivanya', age: 26, height: "5'7\"", figure: '34-28-36', size: 'Medium' },
];

interface EscortsGridProps {
  location: string;
  title?: string;
  subtitle?: string;
}

export default function EscortsGrid({ location, title, subtitle }: EscortsGridProps) {
  const displayTitle = title || `Best Escorts in ${location} - Verified Profiles`;
  const displaySubtitle = subtitle || `Premium ${location} call girls, VIP escorts, and independent companions with verified profiles. Available 24/7 for outcall and incall services.`;

  return (
    <section className="escorts-section" aria-labelledby="escorts-heading">
      <div className="container">
        <h2 id="escorts-heading">{displayTitle}</h2>
        <p className="section-subtitle">{displaySubtitle}</p>
        <div className="escorts-grid">
          {escorts.map((escort) => (
            <div className="escort-card" key={escort.slug}>
              <Image
                src={`/images/name/${escort.slug}-escorts.webp`}
                alt={`${escort.name} - ${location} Escorts`}
                width={350}
                height={350}
                loading="lazy"
              />
              <div className="escort-info">
                <h3>{escort.name} - {location} Escorts</h3>
                <div className="escort-details">
                  <span className="detail-item"><i>👤</i> {escort.age} Years</span>
                  <span className="detail-item"><i>📍</i> {location}</span>
                </div>
                <div className="escort-stats">
                  <div className="stat"><strong>Height</strong><span>{escort.height}</span></div>
                  <div className="stat"><strong>Figure</strong><span>{escort.figure}</span></div>
                  <div className="stat"><strong>Size</strong><span>{escort.size}</span></div>
                </div>
                <Link href="/contact" className="btn-contact" aria-label={`Book ${escort.name}`}>Book Now</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
