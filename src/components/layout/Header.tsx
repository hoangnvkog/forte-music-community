import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="border-b border-soft-border bg-warm-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/brand/forte-logo.svg"
                alt="Forte Music Community Logo"
                width={32}
                height={32}
                priority
              />
              <span className="text-2xl font-bold text-charcoal tracking-wider">
                FORTE
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-charcoal/700 hover:text-charcoal transition-colors">
            <Link href="/" className="hover:text-charcoal">Trang chủ</Link>
            <Link href="/events" className="hover:text-charcoal">Sự kiện</Link>
            <Link href="/members" className="hover:text-charcoal">Thành viên</Link>
            <Link href="/gallery" className="hover:text-charcoal">Bộ sưu tập ảnh</Link>
            <Link href="/about" className="hover:text-charcoal">Giới thiệu</Link>
          </nav>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <Link
              href="/events"
              className="outline-button outline-button-lg hover:bg-champagne-gold hover:text-ivory"
            >
              THAM GIA CỘNG ĐỒNG
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}