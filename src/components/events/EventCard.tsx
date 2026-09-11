import Link from 'next/link';

interface EventCardProps {
  isUpcoming?: boolean;
}

export default function EventCard({ isUpcoming = true }: EventCardProps) {
  const event = isUpcoming ? {
    title: 'Demo Piano Gathering',
    date: 'Sep 15, 2026',
    time: '7:00 PM',
    location: 'Community Hall',
    coverImageUrl: '/placeholder-event.jpg',
    description: 'Join us for an evening of piano music and community connection.',
    status: 'Upcoming'
  } : {
    title: 'Demo Piano Workshop',
    date: 'Aug 20, 2026',
    time: '2:00 PM - 5:00 PM',
    location: 'Music Studio',
    coverImageUrl: '/placeholder-event.jpg',
    description: 'Learn new techniques and share your piano journey with others.',
    status: 'Past'
  };

  return (
    <Link href={`/events/${event.title.toLowerCase().replace(/\s+/g, '-')}`} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-200">
        {/* Placeholder for event image */}
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-2">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${isUpcoming ? 'bg-indigo-100 text-indigo-800' : 'bg-gray-100 text-gray-800'}`}>
            {event.status}
          </span>
          <span className="text-xs text-gray-500">{event.date}</span>
        </div>
        <h3 className="mb-2 text-xl font-semibold text-gray-900">{event.title}</h3>
        <p className="mb-4 text-sm text-gray-500">
          {event.time} · {event.location}
        </p>
        <p className="mb-6 text-gray-600">{event.description}</p>
        <div className="flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          View Event
        </div>
      </div>
    </Link>
  );
}
