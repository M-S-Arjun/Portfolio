'use client';

import Image from 'next/image';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Section } from './section';
import { projects } from '@/lib/data';
import { PlayCircle } from 'lucide-react';
import SpotlightCard from './spotlight-card';

export default function ProjectShowcaseV2() {
    return (
        <Section
            title="Project Showcase"
            subtitle="A selection of my recent work in music production and arrangement."
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <Dialog key={project.id}>
                        <DialogTrigger asChild>
                            <SpotlightCard className="p-0 overflow-hidden group cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 h-full">
                                {project.image && (
                                    <div className="aspect-video relative overflow-hidden">
                                        <Image
                                            src={project.image.imageUrl}
                                            alt={project.image.description}
                                            data-ai-hint={project.image.imageHint}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                            <PlayCircle className="h-12 w-12 text-white/50 group-hover:text-white transition-colors" />
                                        </div>
                                    </div>
                                )}
                                <div className="p-6">
                                    <h3 className="font-bold text-lg font-headline mb-2">{project.title}</h3>
                                    <p className="text-muted-foreground text-sm line-clamp-3">{project.description}</p>
                                </div>
                            </SpotlightCard>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-4xl p-0">
                            <div className="p-8">
                                <DialogHeader className="mb-6">
                                    <DialogTitle className="font-headline text-3xl mb-2 text-left">{project.title}</DialogTitle>
                                    <p className="text-muted-foreground text-left">{project.description}</p>
                                </DialogHeader>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        {project.image && (
                                            <div className="aspect-video relative rounded-lg overflow-hidden border">
                                                <Image
                                                    src={project.image.imageUrl}
                                                    alt={project.image.description}
                                                    data-ai-hint={project.image.imageHint}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        )}
                                        <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl space-y-4 border border-slate-200 dark:border-slate-700">
                                            <h4 className="font-semibold flex items-center gap-2 text-foreground font-headline">
                                                <PlayCircle size={20} className="text-primary" />
                                                Audio Preview
                                            </h4>
                                            <div className="bg-white dark:bg-black/20 rounded-lg p-2 shadow-sm">
                                                <audio controls className="w-full h-10 outline-none">
                                                    <source src={project.audioUrl} type="audio/mpeg" />
                                                    Your browser does not support the audio element.
                                                </audio>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-8 text-base">
                                        <div>
                                            <h4 className="font-semibold text-lg mb-2">My Role</h4>
                                            <p className="text-muted-foreground">{project.role}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg mb-2">Software Used</h4>
                                            <p className="text-muted-foreground">{project.software}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg mb-2">Notable Achievements</h4>
                                            <p className="text-muted-foreground">{project.achievements}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </Section>
    );
}
