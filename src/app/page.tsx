import Hero from '@/components/home/Hero';
import IntroSection from '@/components/home/IntroSection';
import EventPreview from '@/components/home/EventPreview';
import CommunityPreview from '@/components/home/CommunityPreview';
import GalleryPreview from '@/components/home/GalleryPreview';
import JoinCommunity from '@/components/home/JoinCommunity';

export default function Home() {
  return (
    <main className="space-y-16">
      <Hero />
      <IntroSection />
      <EventPreview />
      <CommunityPreview />
      <GalleryPreview />
      <JoinCommunity />
    </main>
  );
}
