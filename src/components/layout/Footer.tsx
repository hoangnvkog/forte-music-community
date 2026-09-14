import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#';
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL || '#';
  const youtubeUrl = process.env.NEXT_PUBLIC_YOUTUBE_URL || '#';

  return (
    <footer className="bg-ivory">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/brand/forte-logo.png"
              alt="Forte Music Community Logo"
              width={24}
              height={24}
              priority
            />
            <span className="text-2xl font-bold text-charcoal-medium tracking-wider">
              FORTE
            </span>
          </div>
          <p className="text-center text-charcoal-light max-w-xl">
            Một cộng đồng dành cho những người yêu Piano, âm nhạc và những kết nối có ý nghĩa.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a
              href={instagramUrl}
              className="text-charcoal-light hover:text-charcoal-medium transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href={facebookUrl}
              className="text-charcoal-light hover:text-charcoal-medium transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href={youtubeUrl}
              className="text-charcoal-light hover:text-charcoal-medium transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </div>
          <p className="text-center text-charcoal-light">
            © {currentYear} Forte Music Community. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}