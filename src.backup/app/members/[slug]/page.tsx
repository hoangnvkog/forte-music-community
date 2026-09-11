import Link from 'next/link';
import Image from 'next/image';

export default function MemberDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  // Convert slug to a readable name (for demo)
  const nameParts = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1));
  const name = nameParts.join(' ') || 'Demo Member One';

  const member = {
    name: name,
    avatarUrl: '/placeholder-avatar.jpg', // This would be replaced with actual image
    shortBio: 'Piano Enthusiast · Classical & Jazz',
    pianoLevel: 'Intermediate',
    favoriteArtists: 'Ludwig van Beethoven, Frédéric Chopin',
    favoriteGenres: 'Classical, Jazz',
    instagramUrl: '#',
    facebookUrl: '#',
    youtubeUrl: '#',
    joinedAt: 'January 2026',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  };

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Member Avatar */}
        <div className="mb-8 flex justify-center">
          <div className="relative h-48 w-48">
            <Image
              src="/placeholder-avatar.jpg"
              alt={member.name}
              fill
              style={{ objectFit: 'cover', borderRadius: '50%' }}
            />
          </div>
        </div>

        <div className="space-y-8 text-center">
          {/* Member Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{member.name}</h1>
            <p className="mb-4 text-lg text-gray-600">{member.shortBio}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span>Piano Level: {member.pianoLevel}</span>
              <span>Joined: {member.joinedAt}</span>
            </div>
          </div>

          {/* Bio */}
          <div className="text-left">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">About Me</h2>
            <p className="text-gray-600">{member.bio}</p>
          </div>

          {/* Interests */}
          <div className="text-left">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">Interests</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-lg font-medium text-gray-900">
                  Favorite Artists
                </h3>
                <p className="text-gray-600">{member.favoriteArtists}</p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium text-gray-900">
                  Favorite Genres
                </h3>
                <p className="text-gray-600">{member.favoriteGenres}</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex justify-center space-x-6">
            <a
              href={member.instagramUrl}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Instagram
            </a>
            <a
              href={member.facebookUrl}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Facebook
            </a>
            <a
              href={member.youtubeUrl}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              YouTube
            </a>
          </div>

          {/* Back to Members Link */}
          <div className="mt-10">
            <Link href="/members" className="text-gray-600 hover:text-gray-900">
              ← Back to Members
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
