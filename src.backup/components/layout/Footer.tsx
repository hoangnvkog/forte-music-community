import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#';
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL || '#';
  const youtubeUrl = process.env.NEXT_PUBLIC_YOUTUBE_URL || '#';

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
          <div className="space-y-4 text-center lg:text-left">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-gray-900">FORTE</span>
              <span className="text-sm font-medium text-gray-600">MUSIC COMMUNITY</span>
            </div>
            <p className="text-gray-600">
              A community for people who love Piano, music and meaningful connections.
            </p>
            <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8 gap-4">
              <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/events" className="text-gray-700 hover:text-gray-900 transition-colors">
                Events
              </Link>
              <Link href="/members" className="text-gray-700 hover:text-gray-900 transition-colors">
                Members
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-gray-900 transition-colors">
                Gallery
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
                About
              </Link>
            </div>
          </div>
          <div className="space-y-4 text-center lg:text-left">
            <h3 className="mb-2 text-lg font-medium text-gray-900">
              Social
            </h3>
            <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6 gap-4">
              <a
                href={instagramUrl}
                className="text-gray-600 hover:text-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href={facebookUrl}
                className="text-gray-600 hover:text-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href={youtubeUrl}
                className="text-gray-600 hover:text-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-200 pt-10 text-center text-sm text-gray-500">
          © {currentYear} Forte Music Community. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
