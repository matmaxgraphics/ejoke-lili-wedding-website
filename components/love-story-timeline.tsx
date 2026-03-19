'use client';

import { Heart, Diamond, Calendar } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';

interface TimelineEvent {
  icon: React.ReactNode;
  title: string;
  date: string;
  description: string;
}

export function LoveStoryTimeline() {
  const events: TimelineEvent[] = [
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: 'How We Met',
      date: '2019',
      description:
        'It all started on a beautiful autumn evening at a coffee shop. Our eyes met across a crowded room, and in that moment, we knew something special was beginning. What started as a conversation over coffee bloomed into the greatest love story of our lives.',
    },
    {
      icon: <Diamond className="w-6 h-6 text-primary" />,
      title: 'The Proposal',
      date: 'October 26, 2023',
      description:
        'On a starlit evening overlooking the city, he got down on one knee and asked the question we had both been waiting for. With tears of joy and an overwhelming sense of happiness, she said yes. A new chapter of our love story began.',
    },
    {
      icon: <Calendar className="w-6 h-6 text-primary" />,
      title: 'The Big Day',
      date: 'May 16, 2025',
      description:
        'The day we say "I do" and begin our forever together. We cannot wait to celebrate this momentous occasion with all the people we love.',
    },
  ];

  return (
    <section className="min-h-[100dvh] w-full flex flex-col justify-center py-20 sm:py-32 bg-white px-4 sm:px-6 lg:px-8 snap-start snap-always relative">
      <div className="w-full max-w-4xl mx-auto space-y-16">
        {/* Section Header */}
        <Reveal>
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif text-foreground mb-3">
            Our Love Story
          </h2>
          <p className="text-muted-foreground font-light">
            A journey of love and commitment
          </p>
        </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-primary to-accent" />

          {/* Timeline events */}
          <div className="space-y-12 sm:space-y-16">
            {events.map((event, index) => (
              <Reveal key={index} delay={200 + index * 150}>
                <div
                  className={`flex gap-6 sm:gap-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                <div className="w-full sm:w-1/2">
                  <div className="bg-secondary/30 rounded-lg p-6 sm:p-8 border border-accent/20 hover:border-accent/40 transition-colors">
                    <p className="text-sm font-light uppercase tracking-widest text-muted-foreground mb-2">
                      {event.date}
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-serif text-foreground mb-3">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Center icon */}
                <div className="hidden sm:flex w-full sm:w-0 justify-center">
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white border-4 border-primary flex items-center justify-center shadow-lg">
                      {event.icon}
                    </div>
                  </div>
                </div>

                  {/* Empty space for alternate layout */}
                  <div className="hidden sm:block w-full sm:w-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
