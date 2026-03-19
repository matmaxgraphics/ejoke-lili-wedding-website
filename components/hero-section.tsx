'use client';

import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/ui/reveal';

export function HeroSection() {
  const scrollToInvitation = () => {
    const element = document.getElementById('rsvp-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden snap-start snap-always py-20 px-4 sm:px-6 lg:px-8">
      {/* Soft romantic background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-secondary/10" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        {/* Tagline */}
        <Reveal delay={0}>
          <p className="text-sm sm:text-base font-light tracking-widest text-muted-foreground uppercase mb-8">
            Together with their families
          </p>
        </Reveal>

        {/* Main heading */}
        <div className="mb-8">
          <Reveal delay={200}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-foreground mb-4">
              Lily & Ejoke
            </h1>
          </Reveal>
          <Reveal delay={400}>
            <p className="text-lg sm:text-xl text-muted-foreground font-light mb-6">
              invite you to celebrate their wedding
            </p>
          </Reveal>
        </div>

        {/* Date */}
        <Reveal delay={600}>
          <div className="mb-12">
            <p className="text-5xl sm:text-6xl font-serif text-primary mb-2">May 16</p>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-8 bg-accent" />
              <p className="text-sm uppercase tracking-widest text-muted-foreground">Two Thousand Twenty-Five</p>
              <div className="h-px w-8 bg-accent" />
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
