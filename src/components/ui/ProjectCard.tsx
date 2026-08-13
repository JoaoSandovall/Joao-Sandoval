import type { Project } from "@/content/projects";
import type { Page } from "@/types/navigation";

type Props = {
  project: Project;
  onNavigate: (page: Page) => void;
};

function CategoryBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-primary/30 px-2.5 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-primary">
      {children}
    </div>
  );
}

export default function ProjectCard({ project, onNavigate }: Props) {
  return (
    <div className="panel group flex flex-1 flex-col overflow-hidden transition-colors hover:border-primary/50">
    
      {project.image && project.website ? (
        <a
          href={project.website}
          target="_blank"
          rel="noreferrer"
          className="relative aspect-video w-full overflow-hidden border-b border-border bg-muted/20 cursor-pointer focus:outline-none"
          aria-label={`Acessar site do projeto ${project.name}`}
        >
          <img
            src={project.image}
            alt={`Pré-visualização de ${project.name}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 hover:bg-black/10" />
        </a>
      ) : project.image && (
        <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-muted/20">
          <img
            src={project.image}
            alt={`Pré-visualização de ${project.name}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {/* CONTEÚDO */}
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="mb-5 flex items-start justify-between sm:mb-6">
          <CategoryBadge>{project.category}</CategoryBadge>
          <span className="text-sm text-muted-foreground">{project.year}</span>
        </div>
        
        <h3 className="mb-3 font-display text-xl font-bold sm:mb-4 sm:text-2xl">
          {project.name}
        </h3>
        
        <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground sm:mb-6 sm:text-base">
          {project.summary}
          {project.highlight && (
            <> <span className="font-bold text-foreground">{project.highlight}</span>.</>
          )}
        </p>
        
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        
        <button
          onClick={() => onNavigate({ id: "project", slug: project.slug })}
          className="inline-flex cursor-pointer items-center gap-1.5 self-start text-sm font-bold text-primary hover:underline"
        >
          Detalhes
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.75" 
            strokeLinecap="butt" 
            strokeLinejoin="miter" 
            className="transition-transform group-hover:translate-x-1"
          >
            <line x1="4" y1="12" x2="19" y2="12"></line>
            <polyline points="13 6 19 12 13 18"></polyline>
          </svg>
        </button>
      </div>
      
    </div>
  );
}