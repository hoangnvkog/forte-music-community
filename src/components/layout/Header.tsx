import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/brand/forte-logo.png"
                alt="Forte Music Community Logo"
                width={36}
                height={36}
                priority
              />
              <span className="text-2xl font-bold text-charcoal-medium tracking-wider">
                FORTE
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8 text-base font-medium">
            <Link href="/" className="nav-link">Trang chủ</Link>
            <Link href="/events" className="nav-link">Sự kiện</Link>
            <Link href="/members" className="nav-link">Thành viên</Link>
            <Link href="/gallery" className="nav-link">Bộ sưu tập ảnh</Link>
            <Link href="/about" className="nav-link">Giới thiệu</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}