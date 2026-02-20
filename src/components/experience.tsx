import { Section } from './section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { experience } from '@/lib/data';
import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SplitText from './split-text';

export default function Experience() {
  return (
    <Section
      title="Experience"
      subtitle="Hands-on involvement in both studio production and live performance environments."
    >
      <Tabs defaultValue="production" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="production">
            <experience.production.icon className="w-4 h-4 mr-2" />
            {experience.production.title}
          </TabsTrigger>
          <TabsTrigger value="live">
            <experience.live.icon className="w-4 h-4 mr-2" />
            {experience.live.title}
          </TabsTrigger>
        </TabsList>
        <Card className="mt-4">
            <CardContent className="p-6">
                <TabsContent value="production">
                    <ul className="space-y-4">
                        {experience.production.items.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <SplitText text={item} className="text-muted-foreground text-left" textAlign='left' splitType='words' delay={10} />
                        </li>
                        ))}
                    </ul>
                </TabsContent>
                <TabsContent value="live">
                    <ul className="space-y-4">
                        {experience.live.items.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <SplitText text={item} className="text-muted-foreground text-left" textAlign='left' splitType='words' delay={10} />
                        </li>
                        ))}
                    </ul>
                </TabsContent>
            </CardContent>
        </Card>
      </Tabs>
    </Section>
  );
}
