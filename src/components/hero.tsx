import Image from 'next/image';
import { heroData } from '@/lib/data';
import InteractiveBio from './interactive-bio';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import SplitText from './split-text';
import TiltedCard from './tilted-card';
import { TextGenerateEffect } from './text-generate-effect';

export default function Hero() {
  return (
    <section className="relative h-[calc(100dvh-3.5rem)] w-full flex items-center justify-center text-center">
      {heroData.heroImage && (
        <Image
          src={heroData.heroImage.imageUrl}
          alt={heroData.heroImage.description}
          data-ai-hint={heroData.heroImage.imageHint}
          fill
          priority
          className="object-cover object-center absolute inset-0 z-0"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
      
      <div className="container relative z-20 flex flex-col items-center justify-center h-full px-4 md:px-6">
        <div className="space-y-2 max-w-3xl">
          <div>
            <SplitText
              tag="h1"
              text={heroData.name}
              className="font-headline text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-white drop-shadow-md"
              delay={50}
              splitType="chars"
            />
          </div>
          <div>
            <TextGenerateEffect
              words={heroData.tagline}
              className="text-lg md:text-xl lg:text-2xl text-white/90 drop-shadow-sm"
            />
          </div>
        </div>
        
        <SplitText
            text={heroData.subheading}
            className="max-w-xl mx-auto text-white/80 drop-shadow-sm mt-4"
            delay={10}
            splitType="words"
          />
        
        <div className="mt-8 w-full max-w-4xl">
            <div className="grid md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-2 max-w-sm mx-auto w-full md:w-auto flex justify-center items-center">
                    {heroData.profileImage && (
                       <TiltedCard
                          imageSrc={heroData.profileImage.imageUrl}
                          altText={heroData.profileImage.description}
                          containerHeight="250px"
                          containerWidth="250px"
                          imageHeight="250px"
                          imageWidth="250px"
                          showMobileWarning={false}
                          showTooltip={false}
                       />
                    )}
                </div>
                <div className="md:col-span-3">
                    <InteractiveBio />
                </div>
            </div>
        </div>


        <Link href="#projects" className="absolute bottom-10 z-30 animate-bounce">
            <ArrowDown className="h-8 w-8 text-white/70" />
            <span className="sr-only">Scroll to projects</span>
        </Link>
      </div>
    </section>
  );
}
