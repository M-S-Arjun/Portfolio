'use client';

import { useRef, forwardRef } from 'react';
import './spotlight-card.css';
import { cn } from '@/lib/utils';

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
};

const SpotlightCard = forwardRef<HTMLDivElement, SpotlightCardProps & React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className = '', spotlightColor, ...props }, ref) => {
    const divRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!divRef.current) return;
      const rect = divRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      divRef.current.style.setProperty('--mouse-x', `${x}px`);
      divRef.current.style.setProperty('--mouse-y', `${y}px`);
      if (spotlightColor) {
        divRef.current.style.setProperty('--spotlight-color', spotlightColor);
      }
    };

    return (
      <div
        ref={(node) => {
          divRef.current = node;
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            // @ts-ignore
            ref.current = node;
          }
        }}
        onMouseMove={handleMouseMove}
        className={cn('card-spotlight', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

SpotlightCard.displayName = "SpotlightCard";

export default SpotlightCard;
