import Link from 'next/link';

export default function GalleryPreview() {
  return (
    <section className="bg-ivory">
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-4xl font-cormorant text-charcoal-medium text-center">
          Bộ sưu tập ảnh cộng đồng
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Gallery Item Placeholder */}
          <Link
            href="/gallery/1"
            className="card-simple hover-scale-refined"
          >
            <div className="h-48 bg-gray-200">
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold text-charcoal-medium">
                Piano Gathering #12
              </h3>
              <p className="text-sm text-charcoal-light">
                Sep 10, 2026
              </p>
            </div>
          </Link>
          {/* Second Gallery Item Placeholder */}
          <Link
            href="/gallery/2"
            className="card-simple hover-scale-refined"
          >
            <div className="h-48 bg-gray-200">
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold text-charcoal-medium">
                Piano Night #11
              </h3>
              <p className="text-sm text-charcoal-light">
                Aug 25, 2026
              </p>
            </div>
          </Link>
          {/* Third Gallery Item Placeholder */}
          <Link
            href="/gallery/3"
            className="card-simple hover-scale-refined"
          >
            <div className="h-48 bg-gray-200">
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold text-charcoal-medium">
                Workshop #10
              </h3>
              <p className="text-sm text-charcoal-light">
                Aug 15, 2026
              </p>
            </div>
          </Link>
          {/* Fourth Gallery Item Placeholder */}
          <Link
            href="/gallery/4"
            className="card-simple hover-scale-refined"
          >
            <div className="h-48 bg-gray-200">
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold text-charcoal-medium">
                Community Meetup
              </h3>
              <p className="text-sm text-charcoal-light">
                Aug 5, 2026
              </p>
            </div>
          </Link>
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="button-simple"
          >
            XEM BỘ SỮP TẬP ẢNH
          </Link>
        </div>
      </div>
    </section>
  );
}