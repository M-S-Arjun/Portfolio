'use client';

import Image from 'next/image';
import { Section } from './section';
import { certifications } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';
import SplitText from './split-text';

export default function Certifications() {
  return (
    <Section
      title="Certifications"
      subtitle="Official recognition of my skills from Trinity College London."
      className="bg-muted/30"
    >
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {certifications.map((cert, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden cursor-pointer group">
                      <CardContent className="flex aspect-[5/7] items-center justify-center p-0 relative">
                        {cert.image && (
                          <Image
                            src={cert.image.imageUrl}
                            alt={cert.image.description}
                            data-ai-hint={cert.image.imageHint}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
                          <h4 className="text-white font-bold text-lg flex items-center gap-2"> <Award size={18} /> {cert.title}</h4>
                          <p className="text-white/80 text-sm">{cert.college}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-xl bg-transparent border-none shadow-none">
                    {cert.image && (
                      <Image
                        src={cert.image.imageUrl}
                        alt={cert.image.description}
                        data-ai-hint={cert.image.imageHint}
                        width={500}
                        height={700}
                        className="object-contain rounded-lg w-full h-auto"
                      />
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
}
