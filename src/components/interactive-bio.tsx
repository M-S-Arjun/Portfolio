'use client';

import { User } from 'lucide-react';
import SplitText from './split-text';
import { heroData } from '@/lib/data';

export default function InteractiveBio() {
  return (
    <div className="w-full h-full flex flex-col justify-center p-6 rounded-lg bg-card/80 backdrop-blur-sm shadow-lg border border-border/20 text-left overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-headline text-lg font-semibold flex items-center gap-2 text-card-foreground">
          <User className="h-5 w-5" />
          About Me
        </h3>
      </div>
      <SplitText
        text={heroData.bio}
        className="text-card-foreground/90 text-sm md:text-base leading-relaxed"
        textAlign="left"
        splitType="words"
        delay={10}
      />
    </div>
  );
}
