import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { education } from "@/content";

export default function Formation() {
  return (
    <div className="border-t border-border bg-card/30">
      <section className="section-spacing mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading>Formação</SectionHeading>
        <Reveal>
          <div className="panel p-6 sm:p-8">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div>
                <h3 className="font-display text-xl font-bold sm:text-2xl">{education.course}</h3>
                <p className="mt-1 font-bold text-primary">{education.institution}</p>
              </div>
              <div className="shrink-0 sm:text-right">
                <span className="label block">{education.period}</span>
                <span className="mt-1 inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-bold text-primary">
                  {education.status}
                </span>
              </div>
            </div>
            
            <p className="mb-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {education.description}
            </p>
            
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="label mb-4">Disciplinas principais</p>
                <ul className="space-y-2.5">
                  {education.disciplines.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm text-muted-foreground sm:text-base">
                      <span className="bullet" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="label mb-4">Tecnologias aplicadas</p>
                <div className="flex flex-wrap gap-2">
                  {education.stack.map((t) => (
                    <span key={t} className="tag-outline">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}