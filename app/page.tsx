import { HeroSection } from '@/components/hero-section';
import { WeddingCountdown } from '@/components/wedding-countdown';
import { LoveStoryTimeline } from '@/components/love-story-timeline';
import { PhotoGallery } from '@/components/photo-gallery';
import { RSVPSection } from '@/components/rsvp-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <WeddingCountdown />
      <LoveStoryTimeline />
      <PhotoGallery />
      <RSVPSection />
      <Footer />
    </main>
  );
}
