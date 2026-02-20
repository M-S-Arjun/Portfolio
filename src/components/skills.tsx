import { Section } from './section';
import { skills } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SplitText from './split-text';
import SpotlightCard from './spotlight-card';

export default function Skills() {
  return (
    <Section
      title="My Skillset"
      subtitle="A blend of technical proficiency and creative passion for audio."
      className="bg-muted/30"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <SpotlightCard
            key={skill.name}
            className="text-center p-0 overflow-hidden group transition-all hover:shadow-lg hover:-translate-y-1 h-full"
          >
             <CardHeader className="items-center pb-4 pt-6">
              <div className="p-4 bg-primary/10 rounded-full mb-2 transition-all group-hover:scale-110 group-hover:bg-primary/20">
                <skill.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-lg">{skill.name}</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <SplitText text={skill.description} className="text-muted-foreground text-sm" splitType='words' delay={10} />
            </CardContent>
          </SpotlightCard>
        ))}
      </div>
    </Section>
  );
}
