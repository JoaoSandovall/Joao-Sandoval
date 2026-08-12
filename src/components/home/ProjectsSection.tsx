import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/content";
import type { Page } from "@/types/navigation";

type Props = {
  onNavigate: (page: Page | string) => void;
};

export default function ProjectsSection({ onNavigate }: Props) {
  return (
    <div className="border-t border-border">
      <section id="projetos" className="section-spacing mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading>Projetos em destaque</SectionHeading>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80} className="flex">
              <ProjectCard project={project} onNavigate={onNavigate} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}