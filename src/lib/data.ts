import { Music, Mic, Disc, Radio, Users, BrainCircuit, Zap, SlidersHorizontal, Layers, GitBranch, Edit3, Ear } from 'lucide-react';
import { PlaceHolderImages, type ImagePlaceholder } from './placeholder-images';
// Force rebuild of data

const findImage = (id: string): ImagePlaceholder | undefined => PlaceHolderImages.find(img => img.id === id);

export const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificates', href: '#certifications' },
];

export const heroData = {
    name: "M S ARJUN",
    tagline: "Aspiring Sound Engineer & Music Producer",
    subheading: "Crafting immersive audio experiences with Logic Pro X.",
    heroImage: findImage('hero-image'),
    profileImage: findImage('profile-image'),
    bio: "As an aspiring Sound Engineer with a profound passion for music, I specialize in Logic Pro X to bring creative visions to life. My experience spans the full production process, from recording and mixing to detailed audio editing and live performance coordination. With a strong foundation in music theory and extensive experience as a lead keyboardist in over 100 shows, I am dedicated to crafting immersive and polished audio experiences."
};

export const resumeText = `
An aspiring Sound Engineer with a deep passion for music production and audio engineering. Proficient in Logic Pro X, with hands-on experience in recording, mixing, and audio editing. Skilled in music theory, keyboard performance, and live sound coordination. Completed over 100 live performances as a lead keyboardist. Holds certifications from Trinity College London in Electronic Keyboard (Grades 1-4) and Drum Kit (Grade 1). Eager to contribute technical skills and creative passion to the Audio and Music Technology program at Nottingham Trent University.
`;

export type Project = {
    id: number;
    title: string;
    description: string;
    role: string;
    software: string;
    achievements: string;
    audioUrl: string;
    image?: ImagePlaceholder;
};


export const projects: Project[] = [
    {
        id: 1,
        title: 'Cover Song: "Blinding Lights"',
        description: 'A full cover production of The Weeknd\'s "Blinding Lights". This project involved recreating all instrumental parts, recording vocals, and mixing the final track to match commercial standards.',
        role: 'Producer, Mixing Engineer, Instrumentalist',
        software: 'Logic Pro X',
        achievements: 'Achieved a balanced mix with clear vocal presence and dynamic instrumental arrangement.',
        audioUrl: '/audio/blinding-lights-cover.mp3',
        image: findImage('project-cover-1'),
    },
    {
        id: 2,
        title: 'Cover Song: "The Final Countdown"',
        description: 'A full cover production of Europe\'s "The Final Countdown". This project involved recreating all instrumental parts, recording vocals, and mixing the final track to match commercial standards.',
        role: 'Producer, Mixing Engineer, Instrumentalist',
        software: 'Logic Pro X',
        achievements: 'Achieved a powerful, commercially viable sound with precise instrumental recreation.',
        audioUrl: '/audio/the-final-countdown.mp3',
        image: findImage('project-cover-2'),
    },
    {
        id: 3,
        title: 'Cover Song: "Rasputin"',
        description: 'A full cover production of Boney M\'s "Rasputin". This project involved recreating all instrumental parts, recording vocals, and mixing the final track to match commercial standards.',
        role: 'Producer, Mixing Engineer, Instrumentalist',
        software: 'Logic Pro X',
        achievements: 'Captured the high-energy disco funk style with authentic instrumentation and vocal layering.',
        audioUrl: '/audio/rasputin.mp3',
        image: findImage('project-cover-3'),
    },
];

export const skills = [
    { name: 'Logic Pro X', icon: Music, description: 'Advanced proficiency in recording, editing, and mixing workflow.' },
    { name: 'Recording & Layering', icon: Layers, description: 'Building complex arrangements from the ground up.' },
    { name: 'Mixing Workflow', icon: SlidersHorizontal, description: 'EQ, compression, reverb, automation to achieve a polished sound.' },
    { name: 'Audio Editing', icon: Edit3, description: 'Precise editing for timing, and arrangement.' },
    { name: 'Music Theory', icon: BrainCircuit, description: 'Strong grasp of chord progressions, harmony, and arrangement.' },
    { name: 'Keyboard Performance', icon: Radio, description: 'Lead keyboardist with extensive live and studio experience.' },
    { name: 'Pitch Recognition', icon: Ear, description: 'A trained ear for tuning correction and melodic accuracy.' },
    { name: 'Drums (Foundational)', icon: Disc, description: 'Solid rhythm and foundational drumming skills for beat creation.' },
];

export const experience = {
    production: {
        title: 'Audio Production',
        icon: Mic,
        items: [
            'Utilized Logic Pro X for end-to-end music production, from initial recording to final mixdown.',
            'Expertly recorded and layered multiple instrumental and vocal tracks to create rich, full-bodied soundscapes.',
            'Performed detailed audio editing, including noise reduction, timing alignment, and vocal tuning with Flex Pitch.',
            'Applied advanced mixing techniques using EQ, compression, reverb, and automation to enhance clarity and impact.',
            'Created full cover versions of popular songs and produced original instrumental tracks for various projects.',
        ]
    },
    live: {
        title: 'Live Performance',
        icon: Users,
        items: [
            'Served as the lead keyboard player for a prominent band, performing in over 100 live programs.',
            'Gained experience as a supporting drummer, providing a solid rhythmic foundation for live sets.',
            'Managed live sound coordination, liaising with event organizers to ensure optimal audio setup and quality.',
            'Developed strong stage presence and the ability to engage with audiences of varying sizes.',
        ]
    }
};

export const certifications = [
    { title: 'Electronic Keyboard - Grade 4', college: 'Trinity College London', image: findImage('cert-keyboard-4') },
    { title: 'Electronic Keyboard - Grade 3', college: 'Trinity College London', image: findImage('cert-keyboard-3') },
    { title: 'Electronic Keyboard - Grade 2', college: 'Trinity College London', image: findImage('cert-keyboard-2') },
    { title: 'Electronic Keyboard - Grade 1', college: 'Trinity College London', image: findImage('cert-keyboard-1') },
    { title: 'Drum Kit - Grade 1', college: 'Trinity College London', image: findImage('cert-drum-1') },
];

export const performances = [
    { title: 'Keyboard Performance - "Interstellar" Theme', embedUrl: 'https://www.youtube.com/embed/videoseries?list=PLOU2XLYxmsIK6n2aJjfeI3jL4ojudWk8t', thumbnail: findImage('video-thumb-1') },
    { title: 'Live Keyboard Solo Improvisation', embedUrl: 'https://www.youtube.com/embed/videoseries?list=PLOU2XLYxmsIK6n2aJjfeI3jL4ojudWk8t', thumbnail: findImage('video-thumb-2') },
];

export const footer = {
    socials: [
        { name: 'Youtube', url: '#' },
        { name: 'Soundcloud', url: '#' },
        { name: 'LinkedIn', url: '#' },
    ]
}