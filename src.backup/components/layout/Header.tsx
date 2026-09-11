import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-gray-900">FORTE</span>
              <span className="text-sm font-medium text-gray-600">MUSIC COMMUNITY</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
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
          </nav>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              YouTube
            </a>
            <Link
              href="/events"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Join Community
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
