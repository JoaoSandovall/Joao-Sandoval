import type { Project } from "@/content/projects";

type Props = {
  project: Project;
  onBack: () => void;
};

function SectionIcon({ type }: { type: "challenge" | "solution" | "outcome" }) {
  const baseClass = "flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary";
  
  if (type === "challenge") return (
    <div className={baseClass}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
    </div>
  );
  if (type === "solution") return (
    <div className={baseClass}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
    </div>
  );
  return (
    <div className={baseClass}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15V2"/><path d="M19 17a10 10 0 1 1-14 0"/><path d="m11 14 1 1 4-4"/></svg>
    </div>
  );
}

function Section({ heading, type, items }: { heading: string; type: "challenge" | "solution" | "outcome"; items: string[] }) {
  return (
    <section className="mb-12">
      <div className="mb-5 flex items-center gap-4">
        <SectionIcon type={type} />
        <h2 className="font-display text-2xl font-bold text-foreground">{heading}</h2>
      </div>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 text-primary/60"><polyline points="20 6 9 17 4 12"/></svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ProjectDetailPage({ project, onBack }: Props) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      
      <button 
        onClick={onBack} 
        className="group mb-10 inline-flex cursor-pointer items-center gap-2 font-display text-sm font-bold text-muted-foreground transition-colors hover:text-foreground sm:text-base"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1"><path d="m15 18-6-6 6-6"/></svg>
        Voltar para projetos
      </button>
      
      <header className="mb-12 max-w-3xl">
        <div className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-primary">
          <span>{project.category}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-border" />
          <span>{project.year}</span>
        </div>
        
        <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl">
          {project.name}
        </h1>
        
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-4">
          {project.website && (
            <a href={project.website} target="_blank" rel="noreferrer" className="btn-primary cursor-pointer">
              Acessar site ao vivo
            </a>
          )}
          {project.repository && (
            <a href={project.repository} target="_blank" rel="noreferrer" className="btn-outline cursor-pointer">
              Ver código-fonte
            </a>
          )}
        </div>
      </header>

      {project.image && (
        <div className="mb-16 overflow-hidden rounded-2xl border border-border bg-card/50 shadow-2xl shadow-black/20 sm:mb-24">
          <img 
            src={project.image} 
            alt={`Interface do projeto ${project.name}`} 
            className="w-full object-cover"
          />
        </div>
      )}

      <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-20">
        
        <div>
          <Section type="challenge" heading="O Desafio" items={project.challenge} />
          <Section type="solution" heading="A Solução" items={project.solution} />
          <Section type="outcome" heading="O Resultado" items={project.outcome} />
        </div>

        <aside className="space-y-8 lg:sticky lg:top-32 lg:self-start">
          
          {project.highlight && (
            <div className="panel overflow-hidden border-primary/20 bg-primary/5 p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Grande Conquista</span>
              <p className="mt-3 font-display text-2xl font-bold leading-tight text-foreground">
                {project.highlight}
              </p>
            </div>
          )}

          <div className="panel p-6">
            <h3 className="mb-5 font-display text-sm font-bold uppercase tracking-widest text-foreground">
              Tecnologias Utilizadas
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-outline bg-background">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="panel p-6">
            <h3 className="mb-3 font-display text-sm font-bold uppercase tracking-widest text-foreground">
              Contexto
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.context}
            </p>
          </div>

        </aside>

      </div>
    </main>
  );
}