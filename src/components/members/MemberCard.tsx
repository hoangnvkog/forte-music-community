import Link from 'next/link';
import Image from 'next/image';

export default function MemberCard() {
  const member = {
    name: 'Demo Member One',
    avatarUrl: '/placeholder-avatar.jpg',
    shortBio: 'Piano Enthusiast · Classical & Jazz',
  };

  return (
    <Link href={`/members/${member.name.toLowerCase().replace(/\s+/g, '-')}`} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 bg-gray-200">
        <Image
          src="/placeholder-avatar.jpg"
          alt={member.name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-gray-900">{member.name}</h3>
        <p className="mb-4 text-sm text-gray-500">{member.shortBio}</p>
        <div className="flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          View Profile
        </div>
      </div>
    </Link>
  );
}
