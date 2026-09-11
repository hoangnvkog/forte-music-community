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
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
      {galleryItems.map((item) => (
        <Link
          key={item.id}
          href={`/gallery/${item.id}`}
          className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="h-48 bg-gray-200">
            {/* Placeholder for gallery image */}
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="p-4">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500">{item.date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
