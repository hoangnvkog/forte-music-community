import Link from 'next/link';
import Image from 'next/image';

export default function GalleryGrid() {
  // In a real app, we would fetch gallery data from Supabase
  // For MVP, we are using placeholder data
  const galleryItems = [
    {
      id: 1,
      title: 'Piano Gathering #12',
      date: 'Sep 10, 2026',
      imageUrl: '/placeholder-gallery-1.jpg',
    },
    {
      id: 2,
      title: 'Piano Night #11',
      date: 'Aug 25, 2026',
      imageUrl: '/placeholder-gallery-2.jpg',
    },
    {
      id: 3,
      title: 'Workshop #10',
      date: 'Aug 15, 2026',
      imageUrl: '/placeholder-gallery-3.jpg',
    },
    {
      id: 4,
      title: 'Community Meetup',
      date: 'Aug 5, 2026',
      imageUrl: '/placeholder-gallery-4.jpg',
    },
    {
      id: 5,
      title: 'Piano Gathering #11',
      date: 'Jul 20, 2026',
      imageUrl: '/placeholder-gallery-5.jpg',
    },
    {
      id: 6,
      title: 'Piano Night #10',
      date: 'Jul 5, 2026',
      imageUrl: '/placeholder-gallery-6.jpg',
    },
  ];

  return (
    <section className="bg-ivory">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="mb-12 text-4xl font-cormorant text-charcoal text-center">
          Bộ sưu tập ảnh cộng đồng
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <Link
              key={item.id}
              href={`/gallery/${item.id}`}
              className="border border-soft-border rounded-sm overflow-hidden hover-scale transition-transform duration-300"
            >
              <div className="relative h-48 bg-gray-200">
                {/* Placeholder for gallery image */}
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-charcoal">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal/600">{item.date}</p>
              </div>
            </Link>
          ))}
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