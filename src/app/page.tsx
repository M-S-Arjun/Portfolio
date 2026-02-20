import Header from '@/components/header';
import Hero from '@/components/hero';
import ProjectShowcaseV2 from '@/components/project-showcase-v2';
import Skills from '@/components/skills';
import Experience from '@/components/experience';
import Certifications from '@/components/certifications';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <div id="projects" />
        <ProjectShowcaseV2 />
        <div id="skills" />
        <Skills />
        <div id="experience" />
        <Experience />
        <div id="certifications" />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}
