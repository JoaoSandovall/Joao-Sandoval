import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { experience, freelancer, projects } from "@/content";
import type { Page } from "@/types/navigation";

type Props = {
  onNavigate: (page: Page | string) => void;
};

export default function Experience({ onNavigate }: Props) {
  const freelanceProjects = projects.filter((p) =>
    freelancer.projectSlugs.includes(p.slug)
  );

  return (
    <div className="border-t border-border">
      <section className="section-spacing mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading>Experiência</SectionHeading>
        <div className="divide-y divide-border">
          {experience.map((job, i) => (
            <Reveal key={job.role} delay={i * 80}>
              <article className="grid gap-3 py-8 md:grid-cols-[220px_1fr] md:gap-10">
                <div className="flex flex-row items-baseline gap-3 md:flex-col md:items-start md:gap-1.5">
                  <span className="font-bold text-primary">{job.company}</span>
                  <span className="label">{job.period}</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold sm:text-xl">{job.role}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {job.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay={experience.length * 80}>
            <article className="grid gap-3 py-8 md:grid-cols-[220px_1fr] md:gap-10">
              <div className="flex flex-row items-baseline gap-3 md:flex-col md:items-start md:gap-1.5">
                <span className="font-bold text-primary">Freelancer — Brasília</span>
                <span className="label">{freelancer.period}</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold sm:text-xl">{freelancer.role}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {freelancer.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {freelanceProjects.map((p) => (
                    <button
                      key={p.slug}
                      onClick={() => onNavigate({ id: "project", slug: p.slug })}
                      className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-bold text-primary transition-colors hover:border-primary"
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </div>
  );
}