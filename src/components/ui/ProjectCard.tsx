import type { Project } from "@/content/projects";
import type { Page } from "@/types/navigation";

type Props = {
  project: Project;
  onNavigate: (page: Page) => void;
};

function CategoryBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase text-primary">
      {children}
    </div>
  );
}

export default function ProjectCard({ project, onNavigate }: Props) {
  return (
    <div className="panel group flex flex-1 flex-col overflow-hidden transition-colors hover:border-primary/50">
      
      {/* SEÇÃO DA PRÉ-VISUALIZAÇÃO (IMAGEM) */}
      {project.image && (
        <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-muted/20">
          <img
            src={project.image}
            alt={`Pré-visualização de ${project.name}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {/* SEÇÃO DE CONTEÚDO (TEXTOS) */}
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="mb-5 flex items-start justify-between sm:mb-6">
          <CategoryBadge>{project.category}</CategoryBadge>
          <span className="text-sm text-muted-foreground">{project.year}</span>
        </div>
        <h3 className="mb-3 font-display text-xl font-bold sm:mb-4 sm:text-2xl">{project.name}</h3>
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
          className="inline-flex items-center gap-1.5 self-start text-sm font-bold text-primary hover:underline"
        >
          Detalhes ➤
        </button>
      </div>
    </div>
  );
}