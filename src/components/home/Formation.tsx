import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { education } from "@/content";

export default function Formation() {
  return (
    <div className="border-t border-border">
      <section className="section-spacing mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading>Formação Acadêmica</SectionHeading>
        
        <Reveal>
          <div className="panel flex flex-col gap-8 p-6 sm:p-8">
            
            {/* HEADER DA FORMAÇÃO */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-black border border-border/50 sm:h-14 sm:w-14">
                  <img 
                    src="/logo-catolica.webp" 
                    alt="Logo UCB" 
                    className="h-full w-full object-contain p-1.5" 
                  />
                </div>
                
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground sm:text-xl md:text-2xl">
                    {education.course}
                  </h3>
                  <div className="mt-1.5 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-medium text-primary">{education.institution}</span>
                    <span className="hidden h-1 w-1 rounded-full bg-border sm:block" />
                    <span>{education.period}</span>
                  </div>
                </div>
              </div>

              {/* BADGE DE MÉDIA */}
              <div className="shrink-0 pt-2 sm:pt-0">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  {education.status}
                </span>
              </div>

            </div>

            <div className="grid gap-8 md:grid-cols-[1fr_300px]">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {education.description}
              </p>
              
              <div>
                <span className="mb-3 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Tecnologias Aplicadas
                </span>
                <div className="flex flex-wrap gap-2">
                  {education.stack.map((t) => (
                    <span key={t} className="tag-outline bg-background px-3 py-1 text-xs">
                      {t}
                    </span>
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