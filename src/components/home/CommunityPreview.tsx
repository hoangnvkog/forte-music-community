import Link from 'next/link';

export default function CommunityPreview() {
  return (
    <section className="bg-ivory">
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-4xl font-cormorant text-charcoal-medium text-center">
          Gặp gỡ thành viên của chúng tôi
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Member Card Placeholder */}
          <Link
            href="/members/demo-member-one"
            className="card-simple hover-scale-refined"
          >
            <div className="relative h-48 bg-gray-200">
              {/* Placeholder for member avatar */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                AVATAR
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-2xl font-cormorant text-charcoal-medium">
                Demo Member One
              </h3>
              <p className="mb-4 text-sm text-charcoal-light">
                Piano Enthusiast · Classical & Jazz
              </p>
            </div>
          </Link>
          {/* Second Member Card Placeholder */}
          <Link
            href="/members/demo-member-two"
            className="card-simple hover-scale-refined"
          >
            <div className="relative h-48 bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                AVATAR
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-2xl font-cormorant text-charcoal-medium">
                Demo Member Two
              </h3>
              <p className="mb-4 text-sm text-charcoal-light">
                Piano Teacher · Baroque & Romantic
              </p>
            </div>
          </Link>
          {/* Third Member Card Placeholder */}
          <Link
            href="/members/demo-member-three"
            className="card-simple hover-scale-refined"
          >
            <div className="relative h-48 bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                AVATAR
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-2xl font-cormorant text-charcoal-medium">
                Demo Member Three
              </h3>
              <p className="mb-4 text-sm text-charcoal-light">
                Accompanist · Contemporary & Improv
              </p>
            </div>
          </Link>
          {/* Fourth Member Card Placeholder */}
          <Link
            href="/members/demo-member-four"
            className="card-simple hover-scale-refined"
          >
            <div className="relative h-48 bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                AVATAR
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-2xl font-cormorant text-charcoal-medium">
                Demo Member Four
              </h3>
              <p className="mb-4 text-sm text-charcoal-light">
                Student · All Styles
              </p>
            </div>
          </Link>
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/members"
            className="button-simple"
          >
            GẶP GỠ THÀNH VIÊN
          </Link>
        </div>
      </div>
    </section>
  );
}