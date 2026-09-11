import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-ivory">
      <div className="absolute inset-0">
        {/* Placeholder for a piano/music related image */}
        <Image
          src="/placeholder-hero.jpg"
          alt="Piano keys"
          fill
          className="opacity-10"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      <div className="container mx-auto px-6 lg:px-8 py-24 text-center">
        <p className="text-xs font-inter uppercase tracking-wider text-champagne-gold">
          FORTE MUSIC COMMUNITY
        </p>
        <h1 className="mt-4 text-5xl font-cormorant text-charcoal">
          WHERE MUSIC<br className="hidden sm:inline-block" />
          BRINGS US TOGETHER.
        </h1>
        <p className="mt-6 text-lg text-charcoal/80 max-w-2xl mx-auto">
          A community for people who love Piano, music and meaningful connections.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row sm:justify-center sm:space-x-4">
          <Link
            href="/"
            className="outline-button outline-button-lg hover:bg-champagne-gold hover:text-ivory"
          >
            THAM GIA CỘNG ĐỒNG
          </Link>
          <Link
            href="/events"
            className="outline-button outline-button-lg hover:bg-champagne-gold hover:text-ivory"
          >
            Khám phá sự kiện
          </Link>
        </div>
      </div>
    </section>
  );
}