import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-gray-50 py-24">
      <div className="absolute inset-0">
        {/* Placeholder for a piano/music related image */}
        <Image
          src="/placeholder-hero.jpg"
          alt="Piano keys"
          fill
          className="opacity-20"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-white opacity-30" />
      </div>
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
          FORTE MUSIC COMMUNITY
        </h1>
        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-600">
          A community for people who love music and Piano.
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            JOIN THE COMMUNITY
          </a>
          <Link
            href="/events"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
          >
            EXPLORE EVENTS
          </Link>
        </div>
      </div>
    </section>
  );
}
