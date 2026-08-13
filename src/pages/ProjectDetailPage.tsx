import type { Project } from "@/content/projects";

type Props = {
  project: Project;
  onBack: () => void;
};

function SectionIcon({ type }: { type: "challenge" | "solution" | "outcome" }) {
  const baseClass = "flex size-10 shrink-0 items-center justify-center border border-primary/30 text-primary";
  
  if (type === "challenge") return (
    <div className={baseClass}>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="butt" strokeLinejoin="miter"><rect x="3" y="3" width="18" height="18"/><line x1="12" y1="8" x2="12" y2="13"/><line x1="12" y1="16.5" x2="12" y2="16.51"/></svg>
    </div>
  );
  if (type === "solution") return (
    <div className={baseClass}>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="butt" strokeLinejoin="miter"><path d="M9 4c-2.5 0-3 2-3 4v2c0 1.5-.5 2-2 2 1.5 0 2 .5 2 2v2c0 2 .5 4 3 4"/><path d="M15 4c2.5 0 3 2 3 4v2c0 1.5.5 2 2 2-1.5 0-2 .5-2 2v2c0 2-.5 4-3 4"/></svg>
    </div>
  );
  return (
    <div className={baseClass}>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="butt" strokeLinejoin="miter"><rect x="3" y="3" width="18" height="18"/><polyline points="7 12.5 10.5 16 17 8"/></svg>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="butt" strokeLinejoin="miter" className="mt-1 shrink-0 text-primary/70"><polyline points="4 13 9 18 20 6"/></svg>
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
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="butt" strokeLinejoin="miter" className="transition-transform group-hover:-translate-x-1"><polyline points="15 18 9 12 15 6"/><line x1="9" y1="12" x2="20" y2="12"/></svg>
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