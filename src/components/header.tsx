'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Music2 } from 'lucide-react';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const closeSheet = () => setIsOpen(false);

  const navContent = (
    <nav className={cn("flex items-center gap-6 text-sm font-medium", isMobile && "flex-col gap-8 text-lg")}>
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="transition-colors hover:text-foreground/80 text-foreground/60"
          onClick={closeSheet}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Music2 className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">M S ARJUN</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          {isMobile ? (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs">
                <div className="flex flex-col items-center justify-center h-full">
                  {navContent}
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            navContent
          )}
        </div>
      </div>
    </header>
  );
}
