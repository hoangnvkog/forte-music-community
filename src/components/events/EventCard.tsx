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
    status: 'Sắp tới'
  } : {
    title: 'Demo Piano Workshop',
    date: 'Aug 20, 2026',
    time: '2:00 PM - 5:00 PM',
    location: 'Music Studio',
    coverImageUrl: '/placeholder-event.jpg',
    description: 'Learn new techniques and share your piano journey with others.',
    status: 'Đã qua'
  };

  return (
    <Link 
      href={`/events/${event.title.toLowerCase().replace(/\s+/g, '-')}`} 
      className="border border-soft-border rounded-sm overflow-hidden hover-scale transition-transform duration-300"
    >
      <div className="relative h-48 bg-gray-200">
        {/* Placeholder for event image */}
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-2">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${isUpcoming ? 'bg-champagne-gold/20 text-champagne-gold' : 'bg-charcoal/10 text-charcoal'}`}>
            {event.status}
          </span>
          <span className="text-xs text-charcoal/600">{event.date}</span>
        </div>
        <h3 className="mb-3 text-2xl font-cormorant text-charcoal">{event.title}</h3>
        <p className="mb-4 text-sm text-charcoal/600">
          {event.time} · {event.location}
        </p>
        <p className="mb-5 text-base text-charcoal/80">{event.description}</p>
        <Link
          href={`/events/${event.title.toLowerCase().replace(/\s+/g, '-')}`}
          className="inline-flex items-center outline-button outline-button-sm hover:bg-champagne-gold hover:text-ivory"
        >
          Xem sự kiện
        </Link>
      </div>
    </Link>
  );
}