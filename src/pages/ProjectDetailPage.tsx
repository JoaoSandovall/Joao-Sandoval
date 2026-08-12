import type { Project } from "@/content/projects";

type Props = {
  project: Project;
  onBack: () => void;
};

function Section({ heading, items }: { heading: string; items: string[] }) {
  return (
    <section>
      <h2 className="label text-primary">{heading}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <span className="bullet" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ProjectDetailPage({ project, onBack }: Props) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <button onClick={onBack} className="back-link">
        ← Todos os projetos
      </button>

      <span className="label mt-8 block">
        {project.category} · {project.year}
      </span>
      <h1 className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl md:text-5xl">
        {project.name}
      </h1>
      <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
        {project.context}
      </p>

      {project.highlight && (
        <div className="panel mt-8 p-6 sm:mt-10 sm:p-8">
          <span className="label">Resultado principal</span>
          <p className="mt-2 font-display text-xl font-bold text-primary sm:text-2xl">
            {project.highlight}
          </p>
        </div>
      )}

      <div className="mt-8 flex flex-wrap gap-2 sm:mt-12">
        {project.tags.map((tag) => (
          <span key={tag} className="tag-outline">{tag}</span>
        ))}
      </div>

      <div className="mt-10 space-y-10 sm:mt-14 sm:space-y-12">
        <Section heading="Desafio" items={project.challenge} />
        <Section heading="Solução" items={project.solution} />
        <Section heading="Resultado" items={project.outcome} />
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="btn-primary mt-12 sm:mt-14"
        >
          Ver repositório
        </a>
      )}
    </main>
  );
}
