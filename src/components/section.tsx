import { cn } from "@/lib/utils";
import SplitText from "./split-text";

type SectionProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ title, subtitle, children, className }: SectionProps) {
  return (
    <section className={cn("w-full py-16 md:py-24 lg:py-28 bg-background", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
            <SplitText
                tag="h2"
                text={title}
                className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                splitType="words"
                delay={50}
            />
          {subtitle && (
            <SplitText
              text={subtitle}
              className="mt-4 text-muted-foreground md:text-xl"
              splitType="words"
              delay={20}
            />
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
