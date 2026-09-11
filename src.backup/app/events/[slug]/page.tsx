import Link from 'next/link';
import Image from 'next/image';

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  // In a real app, we would fetch the event data from Supabase using the slug
  // For MVP, we are using placeholder data based on the slug
  const slug = params.slug;
  // Convert slug to a readable title (for demo)
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const event = {
    title: title || 'Demo Piano Gathering',
    date: 'September 15, 2026',
    time: '7:00 PM',
    location: 'Community Hall',
    coverImageUrl: '/placeholder-event.jpg', // This would be replaced with actual image
    description: 'Join us for an evening of piano music and community connection. This event is open to all members and guests.',
    program: [
      { time: '19:00', description: 'Welcome' },
      { time: '19:30', description: 'Free Piano' },
      { time: '20:30', description: 'Community Performance' },
      { time: '21:30', description: 'Social' },
    ],
    registrationUrl: '#', // This would be set from Supabase or environment variable
  };

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Hero Image */}
        <div className="mb-8 h-64 bg-gray-200">
          {/* In a real app, we would use Next.js Image with the event's cover image */}
          <Image
            src="/placeholder-event.jpg"
            alt={event.title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="space-y-8">
          {/* Event Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{event.title}</h1>
            <div className="flex flex-col sm:flex-row sm:space-x-6 mt-4 text-sm text-gray-500">
              <span>{event.date}</span>
              <span>{event.time}</span>
              <span>{event.location}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">Description</h2>
            <p className="text-gray-600">{event.description}</p>
          </div>

          {/* Program */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">Program</h2>
            <div className="space-y-4">
              {event.program.map((item, index) => (
                <div key={index} className="flex">
                  <span className="w-20 font-mono text-gray-500">{item.time}</span>
                  <span>{item.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Join Event Button */}
          <div className="mt-10">
            <a
              href={event.registrationUrl}
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              JOIN EVENT
            </a>
          </div>

          {/* Back to Events Link */}
          <div className="mt-10">
            <Link href="/events" className="text-gray-600 hover:text-gray-900">
              ← Back to Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
