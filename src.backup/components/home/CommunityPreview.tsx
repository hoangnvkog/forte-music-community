import Link from 'next/link';

export default function CommunityPreview() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 text-center">
          Meet Our Members
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Member Card Placeholder */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 bg-gray-200">
              {/* Placeholder for member avatar */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                AVATAR
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Demo Member One
              </h3>
              <p className="mb-4 text-sm text-gray-500">
                Piano Enthusiast · Classical & Jazz
              </p>
              <Link
                href="/members/demo-member-one"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                View Profile
              </Link>
            </div>
          </div>
          {/* Second Member Card Placeholder */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                AVATAR
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Demo Member Two
              </h3>
              <p className="mb-4 text-sm text-gray-500">
                Piano Teacher · Baroque & Romantic
              </p>
              <Link
                href="/members/demo-member-two"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                View Profile
              </Link>
            </div>
          </div>
          {/* Third Member Card Placeholder */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                AVATAR
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Demo Member Three
              </h3>
              <p className="mb-4 text-sm text-gray-500">
                Accompanist · Contemporary & Improv
              </p>
              <Link
                href="/members/demo-member-three"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                View Profile
              </Link>
            </div>
          </div>
          {/* Fourth Member Card Placeholder */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                AVATAR
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Demo Member Four
              </h3>
              <p className="mb-4 text-sm text-gray-500">
                Student · All Styles
              </p>
              <Link
                href="/members/demo-member-four"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                View Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/members"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
          >
            MEET OUR MEMBERS
          </Link>
        </div>
      </div>
    </section>
  );
}
