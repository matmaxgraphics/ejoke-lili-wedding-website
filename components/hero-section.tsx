'use client';

import { Button } from '@/components/ui/button';

export function HeroSection() {
  const scrollToInvitation = () => {
    const element = document.getElementById('rsvp-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Soft romantic background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-secondary/10" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        {/* Tagline */}
        <p className="text-sm sm:text-base font-light tracking-widest text-muted-foreground uppercase mb-8 animate-fade-in">
          Together with their families
        </p>
        
        {/* Main heading */}
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-foreground mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Sarah & James
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-light mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            invite you to celebrate their wedding
          </p>
        </div>
        
        {/* Date */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="text-5xl sm:text-6xl font-serif text-primary mb-2">May 16</p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-accent" />
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Two Thousand Twenty-Five</p>
            <div className="h-px w-8 bg-accent" />
          </div>
        </div>
        
        {/* CTA Button */}
        <Button
          onClick={scrollToInvitation}
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base font-light tracking-wide animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          View Invitation
        </Button>
      </div>
    </section>
  );
}
