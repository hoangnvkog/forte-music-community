import EventCard from '@/components/events/EventCard';

export default function EventsPage() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">
          Events
        </h2>
        <div className="space-y-8">
          {/* Upcoming Events */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Upcoming Events
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <EventCard isUpcoming={true} />
              <EventCard isUpcoming={true} />
              <EventCard isUpcoming={true} />
            </div>
          </div>
          {/* Past Events */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Past Events
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <EventCard isUpcoming={false} />
              <EventCard isUpcoming={false} />
              <EventCard isUpcoming={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
