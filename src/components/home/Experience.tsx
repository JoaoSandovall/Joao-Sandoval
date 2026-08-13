import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
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
    <div className="border-t border-border bg-card/10">
      <section className="section-spacing mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading number="02">Experiência</SectionHeading>

        <div className="space-y-6 sm:space-y-8">
          
          <Reveal delay={0}>
            <article className="panel group grid gap-4 p-6 transition-colors hover:border-primary/50 sm:p-8 md:grid-cols-[240px_1fr] md:gap-8">
              <div className="flex flex-col items-start gap-2">
                <span className="inline-block rounded-md bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                  Freelancer
                </span>
                <span className="label mt-1 text-muted-foreground">{freelancer.period}</span>
                <span className="text-sm font-medium text-foreground">Brasília, DF</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                  {freelancer.role}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {freelancer.description}
                </p>
                
                {/* BOTÕES DOS PROJETOS FREELANCE */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {freelanceProjects.map((p) => (
                    <button
                      key={p.slug}
                      onClick={() => onNavigate({ id: "project", slug: p.slug })}
                      className="group/btn flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-muted-foreground shadow-sm transition-all hover:border-primary hover:bg-primary/5 hover:text-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                      {p.name}
                    </button>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>

          {/* 2 e 3. HISTÓRICO ANTERIOR (MIDR E CLARO) */}
          {experience.map((job, i) => {
            const [companyName, companyLocation] = job.company.split(" — ");
            
            const jobProjects = job.projectSlugs 
              ? projects.filter(p => job.projectSlugs!.includes(p.slug)) 
              : [];
            
            return (
              <Reveal key={job.role} delay={(i + 1) * 80}>
                <article className="panel group grid gap-4 p-6 transition-colors hover:border-primary/50 sm:p-8 md:grid-cols-[240px_1fr] md:gap-8">
                  <div className="flex flex-col items-start gap-2">
                    <span className="inline-block rounded-md bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-widest text-secondary-foreground">
                      {companyName}
                    </span>
                    <span className="label mt-1 text-muted-foreground">{job.period}</span>
                    <span className="text-sm font-medium text-foreground">
                      {companyLocation || "Brasília"}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                      {job.role}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {job.description}
                    </p>

                    {jobProjects.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-3">
                        {jobProjects.map((p) => (
                          <button
                            key={p.slug}
                            onClick={() => onNavigate({ id: "project", slug: p.slug })}
                            className="group/btn flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-muted-foreground shadow-sm transition-all hover:border-primary hover:bg-primary/5 hover:text-primary"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                            >
                              <line x1="7" y1="17" x2="17" y2="7"></line>
                              <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                            {p.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
          
        </div>
      </section>
    </div>
  );
}