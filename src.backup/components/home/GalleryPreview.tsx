import Link from 'next/link';

export default function GalleryPreview() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 text-center">
          Community Gallery
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Gallery Item Placeholder */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200">
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Piano Gathering #12
              </h3>
              <p className="text-sm text-gray-500">
                Sep 10, 2026
              </p>
            </div>
          </div>
          {/* Second Gallery Item Placeholder */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200">
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Piano Night #11
              </h3>
              <p className="text-sm text-gray-500">
                Aug 25, 2026
              </p>
            </div>
          </div>
          {/* Third Gallery Item Placeholder */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200">
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Workshop #10
              </h3>
              <p className="text-sm text-gray-500">
                Aug 15, 2026
              </p>
            </div>
          </div>
          {/* Fourth Gallery Item Placeholder */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200">
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Community Meetup
              </h3>
              <p className="text-sm text-gray-500">
                Aug 5, 2026
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
          >
            VIEW GALLERY
          </Link>
        </div>
      </div>
    </section>
  );
}
