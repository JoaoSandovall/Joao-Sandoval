import { profile } from "@/content";
import type { Page } from "@/types/navigation";

type Props = {
  onNavigate: (page: Page | string) => void;
};

export default function Hero({ onNavigate }: Props) {
  return (
    <header className="relative overflow-hidden border-b border-border">
      <div className="mx-auto max-w-6xl px-4 pt-24 pb-16 sm:px-6 sm:pt-32 sm:pb-24">
        <div className="blueprint-frame ml-4 max-w-3xl sm:ml-6">
          <span className="label mb-4 block text-primary">{profile.location}</span>
          <h1 className="mb-4 font-display text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
            <span className="block text-foreground">João Pedro Sandoval</span>
            <span className="poster-block mt-2">Veras.</span>
          </h1>
          <p className="mb-6 font-display text-xl font-bold text-primary sm:text-2xl">
            {profile.role}
          </p>
          
          <p className="mb-8 text-base leading-relaxed text-muted-foreground sm:mb-10 sm:text-lg">
            Formado em Análise e Desenvolvimento de Sistemas, atuo como desenvolvedor criando sites, sistemas e APIs. Minhas principais ferramentas de trabalho são <span className="text-foreground">Python, React e TypeScript</span>.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a href="#contato" className="btn-primary">Vamos conversar</a>
            <a href="#projetos" className="btn-outline">Ver projetos</a>
          </div>
        </div>
      </div>
    </header>
  );
}