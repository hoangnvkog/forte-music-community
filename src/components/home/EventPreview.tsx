import Link from 'next/link';

export default function EventPreview() {
  return (
    <section className="bg-ivory">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="mb-12 text-4xl font-cormorant text-charcoal text-center">
          Sự kiện sắp tới
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Event Card Placeholder */}
          <div className="border border-soft-border rounded-sm overflow-hidden">
            <div className="h-48 bg-gray-200">
              {/* Placeholder for event image */}
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-2xl font-cormorant text-charcoal">
                Buổi họp Piano mẫu
              </h3>
              <p className="mb-4 text-sm text-charcoal/600">
                Sep 15, 2026 · 7:00 PM · Community Hall
              </p>
              <p className="mb-5 text-base text-charcoal/80">
                Join us for an evening of piano music and community connection.
              </p>
              <Link
                href="/events/demo-piano-gathering"
                className="inline-flex items-center outline-button outline-button-sm hover:bg-champagne-gold hover:text-ivory"
              >
                Xem sự kiện
              </Link>
            </div>
          </div>
          {/* Second Event Card Placeholder */}
          <div className="border border-soft-border rounded-sm overflow-hidden">
            <div className="h-48 bg-gray-200">
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-2xl font-cormorant text-charcoal">
                Demo Piano Workshop
              </h3>
              <p className="mb-4 text-sm text-charcoal/600">
                Sep 22, 2026 · 2:00 PM · Music Studio
              </p>
              <p className="mb-5 text-base text-charcoal/80">
                Learn new techniques and share your piano journey with others.
              </p>
              <Link
                href="/events/demo-piano-workshop"
                className="inline-flex items-center outline-button outline-button-sm hover:bg-champagne-gold hover:text-ivory"
              >
                Xem sự kiện
              </Link>
            </div>
          </div>
          {/* Third Event Card Placeholder */}
          <div className="border border-soft-border rounded-sm overflow-hidden">
            <div className="h-48 bg-gray-200">
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-2xl font-cormorant text-charcoal">
                Community Meetup
              </h3>
              <p className="mb-4 text-sm text-charcoal/600">
                Oct 5, 2026 · 6:30 PM · Local Park
              </p>
              <p className="mb-5 text-base text-charcoal/80">
                A casual gathering to play music and connect with fellow members.
              </p>
              <Link
                href="/events/community-meetup"
                className="inline-flex items-center outline-button outline-button-sm hover:bg-champagne-gold hover:text-ivory"
              >
                Xem sự kiện
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/events"
            className="outline-button outline-button-lg hover:bg-champagne-gold hover:text-ivory"
          >
            XEM TẤT CẢ SỰ KIỆN
          </Link>
        </div>
      </div>
    </section>
  );
}