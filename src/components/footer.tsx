import Link from 'next/link';
import { footer } from '@/lib/data';
import { Music2, Youtube, Code } from 'lucide-react';

const SocialIcon = ({ name }: { name: string }) => {
    switch (name.toLowerCase()) {
        case 'youtube':
            return <Youtube className="h-5 w-5" />;
        case 'soundcloud':
            return <Music2 className="h-5 w-5" />;
        default:
            return <Code className="h-5 w-5" />;
    }
}


export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Music2 className="h-6 w-6" />
          <p className="text-center text-sm leading-loose md:text-left">
            &copy; {new Date().getFullYear()} M S ARJUN. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
            {footer.socials.map((social) => (
                <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    <SocialIcon name={social.name} />
                    <span className="sr-only">{social.name}</span>
                </Link>
            ))}
        </div>
      </div>
    </footer>
  );
}
