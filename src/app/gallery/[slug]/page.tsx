import { events } from '@/data/events';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function GalleryEventPage({
  params,
}: {
  params: { slug: string };
}) {
  const event = events.find((e) => e.slug === params.slug);
  
  if (!event) {
    notFound();
  }

  return (
    <section className="bg-ivory min-h-[calc(100vh-64px)]">
      <div className="container mx-auto px-6 py-20">
        {/* Header sự kiện */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-cormorant text-charcoal-medium">
            {event.title}
          </h1>
          <p className="text-xl text-charcoal-light mt-4">
            {event.date}
          </p>
        </div>

        {/* Lưới hình ảnh sự kiện */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {event.images.map((imgSrc, index) => (
            <Link
              key={index}
              href={imgSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-scale-refined"
            >
              <Image
                src={imgSrc}
                alt={`${event.title} - image ${index + 1}`}
                fill
                className="object-cover"
              />
            </Link>
          ))}
        </div>

        {/* Link quay lại gallery overview */}
        <div className="mt-16 text-center">
          <Link href="/gallery" className="button-simple">
            Về bộ sưu tập ảnh
          </Link>
        </div>
      </div>
    </section>
  );
}