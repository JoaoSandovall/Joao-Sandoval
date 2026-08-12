import Hero from "@/components/home/Hero";
import StackBar from "@/components/home/StackBar";
import Sobre from "@/components/home/about";
import Experience from "@/components/home/Experience";
import Formation from "@/components/home/Formation";
import ProjectsSection from "@/components/home/ProjectsSection";
import ContactSection from "@/components/home/ContactSection";
import type { Page } from "@/types/navigation";

type Props = {
  onNavigate: (page: Page | string) => void;
};

export default function HomePage({ onNavigate }: Props) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero onNavigate={onNavigate} />
      <StackBar />
      <Sobre />
      <Experience onNavigate={onNavigate} />
      <Formation />
      <ProjectsSection onNavigate={onNavigate} />
      <ContactSection />
    </div>
  );
}