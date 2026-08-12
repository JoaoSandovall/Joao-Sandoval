import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/content";
import type { Page } from "@/types/navigation";

type Props = {
  onNavigate: (page: Page | string) => void;
};

export default function ProjectsSection({ onNavigate }: Props) {

  const freelanceProjects = projects.filter((p) => p.category === "Freelance");
  const systemProjects = projects.filter((p) => p.category !== "Freelance");

  return (
    <div className="border-t border-border">
      <section id="projetos" className="section-spacing mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading>Projetos em destaque</SectionHeading>

        {/* BLOCO 1: FREELANCE */}
        {freelanceProjects.length > 0 && (
          <div className="mb-16 sm:mb-20">
            <h3 className="mb-6 font-display text-xl font-bold text-foreground sm:text-2xl">
              Trabalhos Freelance
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
              {freelanceProjects.map((project, i) => (
                <Reveal key={project.slug} delay={i * 80} className="flex">
                  <ProjectCard project={project} onNavigate={onNavigate} />
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* BLOCO 2: SISTEMAS E ESTUDOS */}
        {systemProjects.length > 0 && (
          <div>
            <h3 className="mb-6 font-display text-xl font-bold text-foreground sm:text-2xl">
              Sistemas & Estudos de Caso
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
              {systemProjects.map((project, i) => (
                <Reveal key={project.slug} delay={i * 80} className="flex">
                  <ProjectCard project={project} onNavigate={onNavigate} />
                </Reveal>
              ))}
            </div>
          </div>
        )}

      </section>
    </div>
  );
}