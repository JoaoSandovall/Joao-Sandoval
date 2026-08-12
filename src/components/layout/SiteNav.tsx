import { profile } from "@/content";
import type { Page } from "@/types/navigation";

type NavProps = {
  onNavigate: (page: Page | string) => void;
  currentPage: string;
  onOpenPalette: () => void;
};

export function SiteNav({ onNavigate, currentPage, onOpenPalette }: NavProps) {
  return (
    <nav className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:gap-6 sm:px-6 sm:py-4">
        <button
          onClick={() => onNavigate("home")}
          className="font-display text-sm font-bold tracking-tight"
        >
          JP<span className="text-primary">.</span>
        </button>
        <div className="flex items-center gap-4 text-sm text-muted-foreground sm:gap-6">
          <button
            onClick={() => {
              onNavigate("home");
              setTimeout(() => {
                document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
              }, 50);
            }}
            className="transition-colors hover:text-foreground"
          >
            Projetos
          </button>
          <button
            onClick={() => onNavigate("notes")}
            className={`transition-colors hover:text-foreground ${
              currentPage === "notes" || currentPage === "note" ? "text-foreground" : ""
            }`}
          >
            Notas
          </button>

          {/* NOVO VISUAL DO BOTÃO DE BUSCA AQUI */}
          <button
            onClick={onOpenPalette}
            className="hidden items-center gap-3 rounded-md border border-border bg-card/40 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground sm:flex"
            title="Abrir pesquisa"
          >
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <span>Buscar...</span>
            </div>
            <kbd className="hidden rounded border border-border bg-background px-1.5 py-0.5 text-[10px] font-semibold sm:block">
              Ctrl K
            </kbd>
          </button>

          <button
            onClick={() => {
              onNavigate("home");
              setTimeout(() => {
                document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
              }, 50);
            }}
            className="rounded-md border border-border px-3 py-1.5 text-sm font-bold text-foreground transition-colors hover:border-primary sm:px-4 sm:py-2"
          >
            Contato
          </button>
        </div>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 text-sm text-muted-foreground sm:px-6">
        <p>© {new Date().getFullYear()} {profile.name}. Brasília, DF.</p>
        <div className="flex gap-5 sm:gap-6">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-foreground">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-foreground">
            E-mail
          </a>
        </div>
      </div>
    </footer>
  );
}