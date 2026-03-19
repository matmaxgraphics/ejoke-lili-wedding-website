'use client';

import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/ui/reveal';
import Image from 'next/image';

export function HeroSection() {
  const scrollToInvitation = () => {
    const element = document.getElementById('rsvp-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden snap-start snap-always py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero_bg.png" 
          alt="Lily and Ejoke" 
          fill 
          priority
          className="object-cover object-center animate-image-zoom brightness-[0.6] contrast-125 filter"
        />
        {/* Soft elegant gradient overlay to ensure text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        {/* Tagline */}
        <Reveal delay={0}>
          <p className="text-sm sm:text-base font-light tracking-widest text-white/90 uppercase mb-8 drop-shadow-sm">
            Together with their families
          </p>
        </Reveal>

        {/* Main heading */}
        <div className="mb-8">
          <Reveal delay={200}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-white mb-4 drop-shadow-md">
              Lily & Ejoke
            </h1>
          </Reveal>
          <Reveal delay={400}>
            <p className="text-lg sm:text-xl text-white/90 font-light mb-6 drop-shadow-sm">
              invite you to celebrate their wedding
            </p>
          </Reveal>
        </div>

        {/* Date */}
        <Reveal delay={600}>
          <div className="mb-12 drop-shadow-md">
            <p className="text-5xl sm:text-6xl font-serif text-primary mb-2 text-white">May 16</p>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-8 bg-white/50" />
              <p className="text-sm uppercase tracking-widest text-white/80">Two Thousand Twenty-Six</p>
              <div className="h-px w-8 bg-white/50" />
            </div>
          </div>
        </Reveal>

        {/* CTA Button */}
        <Reveal delay={800}>
          <Button
            onClick={scrollToInvitation}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base font-light tracking-wide shadow-lg hover:shadow-xl transition-all"
          >
            View Invitation
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
