'use client';

import Image from 'next/image';
import { Section } from './section';
import { performances } from '@/lib/data';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';
import SplitText from './split-text';

export default function Performances() {
  return (
    <Section
      title="Performance Videos"
      subtitle="Watch my keyboard performances and live improvisations."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {performances.map((video, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
                <Card className="overflow-hidden cursor-pointer group">
                    <CardContent className="p-0 aspect-video relative">
                        {video.thumbnail && (
                            <Image
                                src={video.thumbnail.imageUrl}
                                alt={video.thumbnail.description}
                                data-ai-hint={video.thumbnail.imageHint}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        )}
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <PlayCircle className="h-16 w-16 text-white/70 group-hover:text-white transition-colors" />
                        </div>
                        <div className="absolute bottom-0 left-0 p-4">
                            <h3 className="text-white font-bold font-headline">{video.title}</h3>
                        </div>
                    </CardContent>
                </Card>
            </DialogTrigger>
            <DialogContent className="max-w-3xl p-0 border-0">
                <div className="aspect-video">
                    <iframe
                        width="100%"
                        height="100%"
                        src={video.embedUrl}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </Section>
  );
}
