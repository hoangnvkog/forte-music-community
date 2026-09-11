import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#';
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL || '#';
  const youtubeUrl = process.env.NEXT_PUBLIC_YOUTUBE_URL || '#';

  return (
    <footer className="border-t border-soft-border bg-charcoal">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
          <div className="space-y-4 text-center lg:text-left">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/brand/forte-logo.svg"
                alt="Forte Music Community Logo"
                width={24}
                height={24}
                priority
              />
              <span className="text-2xl font-bold text-ivory tracking-wider">
                FORTE
              </span>
            </div>
            <p className="text-ivory/80">
              Một cộng đồng dành cho những người yêu Piano, âm nhạc và những kết nối có ý nghĩa.
            </p>
            <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8 gap-4">
              <Link href="/" className="text-ivory/70 hover:text-ivory transition-colors">
                Trang chủ</Link>
              <Link href="/events" className="text-ivory/70 hover:text-ivory transition-colors">
                Sự kiện</Link>
              <Link href="/members" className="text-ivory/70 hover:text-ivory transition-colors">
                Thành viên</Link>
              <Link href="/gallery" className="text-ivory/70 hover:text-ivory transition-colors">
                Bộ sưu tập ảnh</Link>
              <Link href="/about" className="text-ivory/70 hover:text-ivory transition-colors">
                Giới thiệu</Link>
            </div>
          </div>
          <div className="space-y-4 text-center lg:text-left">
            <h3 className="mb-2 text-lg font-medium text-ivory">
              Giao lưu</h3>
            <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6 gap-4">
              <a
                href={instagramUrl}
                className="text-ivory/70 hover:text-ivory transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram</a>
              <a
                href={facebookUrl}
                className="text-ivory/70 hover:text-ivory transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook</a>
              <a
                href={youtubeUrl}
                className="text-ivory/70 hover:text-ivory transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube</a>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-soft-border pt-10 text-center text-sm text-ivory/50">
          © {currentYear} Forte Music Community. All rights reserved.
        </div>
      </div>
    </footer>
  );
}