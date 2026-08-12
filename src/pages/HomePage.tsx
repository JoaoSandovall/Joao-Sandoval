import Hero from "@/components/Hero";
import StackBar from "@/components/StackBar";
import Sobre from "@/components/Sobre";
import ServicesSection from "@/components/ServicesSection";
import Experience from "@/components/Experience";
import Formation from "@/components/Formation";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
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
      <ServicesSection />
      <Experience onNavigate={onNavigate} />
      <Formation />
      <ProjectsSection onNavigate={onNavigate} />
      <ContactSection />
    </div>
  );
}