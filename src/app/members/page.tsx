import Link from 'next/link';
import MemberCard from '@/components/members/MemberCard';

export default function MembersPage() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">
          Members
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/members"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
          >
            VIEW ALL MEMBERS
          </Link>
        </div>
      </div>
    </section>
  );
}
