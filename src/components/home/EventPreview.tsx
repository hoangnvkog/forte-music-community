import Link from 'next/link';

export default function EventPreview() {
  return (
    <section className="bg-ivory">
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-4xl font-cormorant text-charcoal-medium text-center">
          Sự kiện sắp tới
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Event Card Placeholder */}
          <Link
            href="/events/demo-piano-gathering"
            className="card-simple hover-scale-refined"
          >
            <div className="h-48 bg-gray-200">
              {/* Placeholder for event image */}
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-2xl font-cormorant text-charcoal-medium">
                Buổi họp Piano mẫu
              </h3>
              <p className="mb-4 text-sm text-charcoal-light">
                Sep 15, 2026 · 7:00 PM · Community Hall
              </p>
              <p className="mb-6 text-base text-charcoal-light">
                Join us for an evening of piano music and community connection.
              </p>
            </div>
          </Link>
          {/* Second Event Card Placeholder */}
          <Link
            href="/events/demo-piano-workshop"
            className="card-simple hover-scale-refined"
          >
            <div className="h-48 bg-gray-200">
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-2xl font-cormorant text-charcoal-medium">
                Demo Piano Workshop
              </h3>
              <p className="mb-4 text-sm text-charcoal-light">
                Sep 22, 2026 · 2:00 PM · Music Studio
              </p>
              <p className="mb-6 text-base text-charcoal-light">
                Learn new techniques and share your piano journey with others.
              </p>
            </div>
          </Link>
          {/* Third Event Card Placeholder */}
          <Link
            href="/events/community-meetup"
            className="card-simple hover-scale-refined"
          >
            <div className="h-48 bg-gray-200">
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-2xl font-cormorant text-charcoal-medium">
                Community Meetup
              </h3>
              <p className="mb-4 text-sm text-charcoal-light">
                Oct 5, 2026 · 6:30 PM · Local Park
              </p>
              <p className="mb-6 text-base text-charcoal-light">
                A casual gathering to play music and connect with fellow members.
              </p>
            </div>
          </Link>
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/events"
            className="button-simple"
          >
            XEM TẤT CẢ SỰ KIỆN
          </Link>
        </div>
      </div>
    </section>
  );
}