export default function AboutPage() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Forte Music Community
        </h1>
        <p className="mb-6 text-xl text-gray-700">
          Forte is a community built around the love of Piano and music.
        </p>

        <div className="space-y-12">
          <div>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              Our Story
            </h2>
            <p className="text-gray-600">
              Forte Music Community started as a small gathering of piano enthusiasts
              who wanted to share their love for music with others. Over time, we&apos;ve
              grown into a welcoming community where musicians of all levels can
              connect, learn, and inspire each other.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              What We Do
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-lg font-medium text-gray-900">
                  Piano Gatherings
                </h3>
                <p className="text-gray-600">
                  Regular meetups where members play piano, share pieces, and enjoy
                  music together.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium text-gray-900">
                  Music Sharing Sessions
                </h3>
                <p className="text-gray-600">
                  Informal gatherings to listen to and discuss piano music and
                  performances.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium text-gray-900">
                  Workshops
                </h3>
                <p className="text-gray-600">
                  Educational sessions on piano technique, music theory, and
                  performance practice.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium text-gray-900">
                  Community Performances
                </h3>
                <p className="text-gray-600">
                  Opportunities for members to perform in a supportive environment.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium text-gray-900">
                  Meetups
                </h3>
                <p className="text-gray-600">
                  Social events to build connections and friendships through music.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              Our Values
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-lg font-medium text-gray-900">
                  Love Music
                </h3>
                <p className="text-gray-600">
                  We share a deep appreciation for piano music and the joy it brings.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium text-gray-900">
                  Share Knowledge
                </h3>
                <p className="text-gray-600">
                  We believe in learning from each other and growing together.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium text-gray-900">
                  Encourage One Another
                </h3>
                <p className="text-gray-600">
                  We create a supportive environment where everyone feels welcome
                  to share their musical journey.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium text-gray-900">
                  Create Meaningful Connections
                </h3>
                <p className="text-gray-600">
                  We foster lasting friendships and connections through our shared
                  passion for music.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            JOIN COMMUNITY
          </a>
        </div>
      </div>
    </section>
  );
}
