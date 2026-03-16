'use client';

import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-secondary/10 border-t border-accent/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left: Couple Names */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-serif text-foreground mb-2">
              Sarah & James
            </h3>
            <p className="text-sm uppercase tracking-widest text-muted-foreground font-light">
              May 16, 2025
            </p>
          </div>

          {/* Center: Message */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px w-4 bg-accent" />
              <Heart className="w-5 h-5 text-primary fill-primary" />
              <div className="h-px w-4 bg-accent" />
            </div>
            <p className="text-muted-foreground font-light italic">
              "Love is not about finding the perfect person. It's about seeing an imperfect person perfectly."
            </p>
          </div>

          {/* Right: Details */}
          <div className="text-center md:text-right">
            <p className="text-sm uppercase tracking-widest text-muted-foreground font-light mb-2">
              Venue
            </p>
            <p className="text-foreground font-light">
              The Grand Ballroom
              <br />
              123 Love Street
              <br />
              City, State 12345
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-accent/20 my-8" />

        {/* Bottom: Copyright */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-light mb-3">
            Strictly by Invitation
          </p>
          <p className="text-xs text-muted-foreground font-light">
            © 2025 Sarah & James. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
