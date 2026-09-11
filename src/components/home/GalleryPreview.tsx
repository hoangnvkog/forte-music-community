import Link from 'next/link';

export default function GalleryPreview() {
  return (
    <section className="bg-ivory">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="mb-12 text-4xl font-cormorant text-charcoal text-center">
          Bộ sưu tập ảnh cộng đồng
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Gallery Item Placeholder */}
          <div className="border border-soft-border rounded-sm overflow-hidden">
            <div className="h-48 bg-gray-200">
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold text-charcoal">
                Piano Gathering #12
              </h3>
              <p className="text-sm text-charcoal/600">
                Sep 10, 2026
              </p>
            </div>
          </div>
          {/* Second Gallery Item Placeholder */}
          <div className="border border-soft-border rounded-sm overflow-hidden">
            <div className="h-48 bg-gray-200">
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold text-charcoal">
                Piano Night #11
              </h3>
              <p className="text-sm text-charcoal/600">
                Aug 25, 2026
              </p>
            </div>
          </div>
          {/* Third Gallery Item Placeholder */}
          <div className="border border-soft-border rounded-sm overflow-hidden">
            <div className="h-48 bg-gray-200">
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold text-charcoal">
                Workshop #10
              </h3>
              <p className="text-sm text-charcoal/600">
                Aug 15, 2026
              </p>
            </div>
          </div>
          {/* Fourth Gallery Item Placeholder */}
          <div className="border border-soft-border rounded-sm overflow-hidden">
            <div className="h-48 bg-gray-200">
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold text-charcoal">
                Community Meetup
              </h3>
              <p className="text-sm text-charcoal/600">
                Aug 5, 2026
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="outline-button outline-button-lg hover:bg-champagne-gold hover:text-ivory"
          >
            XEM BỘ SỮP TẬP ẢNH
          </Link>
        </div>
      </div>
    </section>
  );
}