import { useState, useEffect } from "react";
import { SiteNav, SiteFooter } from "@/components/layout/SiteNav";
import CommandPalette from "@/components/ui/CommandPalette";
import HomePage from "@/pages/HomePage";
import NotesPage from "@/pages/NotesPage";
import NoteDetailPage from "@/pages/NoteDetailPage";
import ProjectDetailPage from "@/pages/ProjectDetailPage";
import { notes, projects, profile } from "@/content";
import { pageToPath, pathToPage } from "@/types/navigation";
import type { Page } from "@/types/navigation";

function pageTitle(page: Page): string {
  if (page.id === "home") return `${profile.name} — ${profile.role}`;
  if (page.id === "notes") return `Notas técnicas — ${profile.name}`;
  if (page.id === "note") {
    const note = notes.find((n) => n.slug === page.slug);
    return note ? `${note.title} — ${profile.name}` : `Nota — ${profile.name}`;
  }
  if (page.id === "project") {
    const project = projects.find((p) => p.slug === page.slug);
    return project ? `${project.name} — ${profile.name}` : `Projeto — ${profile.name}`;
  }
  return profile.name;
}

export default function App() {
  const [page, setPage] = useState<Page>(() => pathToPage(window.location.pathname));
  const [paletteOpen, setPaletteOpen] = useState(false);

  const navigate = (next: Page | string) => {
    const resolved = typeof next === "string" ? ({ id: next } as Page) : next;
    setPage(resolved);
    const path = pageToPath(resolved);
    if (window.location.pathname !== path) {
      window.history.pushState({}, "", path);
    }
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    document.title = pageTitle(page);
  }, [page]);

  useEffect(() => {
    const onPopState = () => setPage(pathToPage(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav
        onNavigate={navigate}
        currentPage={page.id}
        onOpenPalette={() => setPaletteOpen(true)}
      />
      <PageRenderer page={page} onNavigate={navigate} />
      <SiteFooter />
      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onNavigate={navigate}
      />
    </div>
  );
}

function PageRenderer({
  page,
  onNavigate,
}: {
  page: Page;
  onNavigate: (page: Page | string) => void;
}) {
  if (page.id === "home") return <HomePage onNavigate={onNavigate} />;
  
  if (page.id === "notes") return <NotesPage onNavigate={onNavigate} />;
  
  if (page.id === "note") {
    const note = notes.find((n) => n.slug === page.slug);
    if (!note) return <NotFound message="Nota não encontrada." />;
    return <NoteDetailPage note={note} onBack={() => onNavigate({ id: "notes" })} />;
  }
  
  if (page.id === "project") {
    const project = projects.find((p) => p.slug === page.slug);
    if (!project) return <NotFound message="Projeto não encontrado." />;
    return (
      <ProjectDetailPage 
        project={project} 
        onBack={() => {
          onNavigate("home");
          setTimeout(() => {
            document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
          }, 50);
        }} 
      />
    );
  }
  
  return null;
}

function NotFound({ message }: { message: string }) {
  return <div className="px-6 py-20 text-center text-muted-foreground">{message}</div>;
}