export default function JoinCommunity() {
  const joinUrl = process.env.NEXT_PUBLIC_JOIN_URL || '#';

  return (
    <section className="py-24 bg-indigo-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">
          Come play with us.
        </h2>
        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-600">
          We welcome pianists and music lovers of all levels to join our community.
        </p>
        <a
          href={joinUrl}
          className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
        >
          JOIN FORTE MUSIC COMMUNITY
        </a>
      </div>
    </section>
  );
}
