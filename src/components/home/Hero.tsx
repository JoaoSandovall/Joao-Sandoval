import { profile } from "@/content";
import type { Page } from "@/types/navigation";

type Props = {
  onNavigate: (page: Page | string) => void;
};

export default function Hero({ onNavigate }: Props) {
  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-16 sm:px-6 sm:pt-28 sm:pb-24">
        <div className="max-w-3xl">
          <span className="label mb-4 block text-primary">{profile.location}</span>
          <h1 className="mb-4 font-display text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
            João Pedro Sandoval <span className="text-primary">Veras.</span>
          </h1>
          <p className="mb-6 font-display text-xl font-bold text-primary sm:text-2xl">
            {profile.role}
          </p>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground sm:mb-10 sm:text-lg">
            Focado em sistemas de alta performance com{" "}
            <span className="text-foreground">FastAPI, React 19 e Docker</span>. Transformo
            processos manuais em APIs escaláveis e interfaces fluidas.
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