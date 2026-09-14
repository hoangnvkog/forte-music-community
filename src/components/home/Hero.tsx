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
          className="opacity-5"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-black/2" />
      </div>
      <div className="container mx-auto px-6 py-32 text-center">
        <p className="section-eyebrow">FORTE MUSIC COMMUNITY</p>
        <h1 className="mt-4 text-5xl font-cormorant text-charcoal-medium">
          WHERE MUSIC<br className="hidden sm:inline-block" />
          BRINGS US TOGETHER.
        </h1>
        <p className="mt-6 text-lg text-charcoal-light max-w-2xl mx-auto">
          A community for people who love Piano, music and meaningful connections.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row sm:justify-center sm:space-x-4">
          <Link
            href="/"
            className="button-simple"
          >
            THAM GIA CỘNG ĐỒNG
          </Link>
          <Link
            href="/events"
            className="button-simple"
          >
            Khám phá sự kiện
          </Link>
        </div>
      </div>
    </section>
  );
}