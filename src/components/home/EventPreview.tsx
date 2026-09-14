import { events } from '@/data/events';
import Link from 'next/link';
import Image from 'next/image';

export default function EventPreview() {
  // Show only the first two events as a teaser
  const teaserEvents = events.slice(0, 2);

  return (
    <section className="bg-ivory">
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-4xl font-cormorant text-charcoal-medium text-center">
          Sự kiện sắp tới
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {teaserEvents.map((event) => (
            <Link
              key={event.slug}
              href={`/gallery/${event.slug}`}
              className="card-simple hover-scale-refined"
            >
              <Image
                src={event.images[0]}
                alt={event.title}
                fill
                className="object-cover"
              />
              <div className="p-4">
                <h3 className="mb-3 text-2xl font-cormorant text-charcoal-medium">
                  {event.title}
                </h3>
                <p className="mb-4 text-sm text-charcoal-light">
                  {event.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/gallery"
            className="button-simple"
          >
            Xem tất cả sự kiện
          </Link>
        </div>
      </div>
    </section>
  );
}