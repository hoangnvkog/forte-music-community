import Link from 'next/link';

export default function CommunityPreview() {
  return (
    <section className="bg-ivory">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="mb-12 text-4xl font-cormorant text-charcoal text-center">
          Gặp gỡ thành viên của chúng tôi
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Member Card Placeholder */}
          <div className="border border-soft-border rounded-sm overflow-hidden">
            <div className="relative h-48 bg-gray-200">
              {/* Placeholder for member avatar */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                AVATAR
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-2xl font-cormorant text-charcoal">
                Demo Member One
              </h3>
              <p className="mb-4 text-sm text-charcoal/600">
                Piano Enthusiast · Classical & Jazz
              </p>
              <Link
                href="/members/demo-member-one"
                className="inline-flex items-center outline-button outline-button-sm hover:bg-champagne-gold hover:text-ivory"
              >
                Xem hồ sơ
              </Link>
            </div>
          </div>
          {/* Second Member Card Placeholder */}
          <div className="border border-soft-border rounded-sm overflow-hidden">
            <div className="relative h-48 bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                AVATAR
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-2xl font-cormorant text-charcoal">
                Demo Member Two
              </h3>
              <p className="mb-4 text-sm text-charcoal/600">
                Piano Teacher · Baroque & Romantic
              </p>
              <Link
                href="/members/demo-member-two"
                className="inline-flex items-center outline-button outline-button-sm hover:bg-champagne-gold hover:text-ivory"
              >
                Xem hồ sơ
              </Link>
            </div>
          </div>
          {/* Third Member Card Placeholder */}
          <div className="border border-soft-border rounded-sm overflow-hidden">
            <div className="relative h-48 bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                AVATAR
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-2xl font-cormorant text-charcoal">
                Demo Member Three
              </h3>
              <p className="mb-4 text-sm text-charcoal/600">
                Accompanist · Contemporary & Improv
              </p>
              <Link
                href="/members/demo-member-three"
                className="inline-flex items-center outline-button outline-button-sm hover:bg-champagne-gold hover:text-ivory"
              >
                Xem hồ sơ
              </Link>
            </div>
          </div>
          {/* Fourth Member Card Placeholder */}
          <div className="border border-soft-border rounded-sm overflow-hidden">
            <div className="relative h-48 bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                AVATAR
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-2xl font-cormorant text-charcoal">
                Demo Member Four
              </h3>
              <p className="mb-4 text-sm text-charcoal/600">
                Student · All Styles
              </p>
              <Link
                href="/members/demo-member-four"
                className="inline-flex items-center outline-button outline-button-sm hover:bg-champagne-gold hover:text-ivory"
              >
                Xem hồ sơ
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/members"
            className="outline-button outline-button-lg hover:bg-champagne-gold hover:text-ivory"
          >
            GẶP GỠ THÀNH VIÊN
          </Link>
        </div>
      </div>
    </section>
  );
}