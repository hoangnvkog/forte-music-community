import { events } from '@/data/events';
import Link from 'next/link';
import Image from 'next/image';

export default function GalleryPage() {
  return (
    <section className="bg-ivory">
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-4xl font-cormorant text-charcoal-medium text-center">
          Bộ sưu tập ảnh cộng đồng
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event) => (
            <Link
              key={event.slug}
              href={`/gallery/${event.slug}`}
              className="card-simple hover-scale-refined"
            >
              <Image
                src={event.images[0]}
                alt={`${event.title} - cover`}
                fill
                className="object-cover"
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-charcoal-medium">
                  {event.title}
                </h3>
                <p className="text-sm text-charcoal-light">
                  {event.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="button-simple"
          >
            Về trang chủ
          </Link>
        </div>
      </div>
    </section>
  );
}