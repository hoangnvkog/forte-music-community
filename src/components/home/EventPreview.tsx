import Link from 'next/link';

export default function EventPreview() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 text-center">
          Upcoming Events
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Event Card Placeholder */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200">
              {/* Placeholder for event image */}
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Demo Piano Gathering
              </h3>
              <p className="mb-4 text-sm text-gray-500">
                Sep 15, 2026 · 7:00 PM · Community Hall
              </p>
              <p className="mb-6 text-gray-600">
                Join us for an evening of piano music and community connection.
              </p>
              <Link
                href="/events/demo-piano-gathering"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                View Event
              </Link>
            </div>
          </div>
          {/* Second Event Card Placeholder */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200">
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Demo Piano Workshop
              </h3>
              <p className="mb-4 text-sm text-gray-500">
                Sep 22, 2026 · 2:00 PM · Music Studio
              </p>
              <p className="mb-6 text-gray-600">
                Learn new techniques and share your piano journey with others.
              </p>
              <Link
                href="/events/demo-piano-workshop"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                View Event
              </Link>
            </div>
          </div>
          {/* Third Event Card Placeholder */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200">
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Community Meetup
              </h3>
              <p className="mb-4 text-sm text-gray-500">
                Oct 5, 2026 · 6:30 PM · Local Park
              </p>
              <p className="mb-6 text-gray-600">
                A casual gathering to play music and connect with fellow members.
              </p>
              <Link
                href="/events/community-meetup"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                View Event
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/events"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
          >
            VIEW ALL EVENTS
          </Link>
        </div>
      </div>
    </section>
  );
}
