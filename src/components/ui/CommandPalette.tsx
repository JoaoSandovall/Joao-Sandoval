import { useEffect, useRef, useState } from "react";
import { profile } from "@/content";
import type { Page } from "@/types/navigation";

type Command = {
  id: string;
  label: string;
  hint: string;
  action: () => void;
};

type Props = {
  open: boolean;
  onClose: () => void;
  onNavigate: (page: Page | string) => void;
};

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function CommandPalette({ open, onClose, onNavigate }: Props) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Command[] = [
    {
      id: "projects",
      label: "Ver projetos",
      hint: "Home → Projetos",
      action: () => {
        onNavigate("home");
        setTimeout(() => scrollTo("projetos"), 80);
      },
    },
    {
      id: "contact",
      label: "Ir para contato",
      hint: "Home → Contato",
      action: () => {
        onNavigate("home");
        setTimeout(() => scrollTo("contato"), 80);
      },
    },
    {
      id: "github",
      label: "Abrir GitHub",
      hint: "github.com/JoaoSandovall",
      action: () => window.open(profile.github, "_blank"),
    },
    {
      id: "linkedin",
      label: "Abrir LinkedIn",
      hint: "linkedin.com/in/joãosandoval",
      action: () => window.open(profile.linkedin, "_blank"),
    },
    {
      id: "email",
      label: "Copiar e-mail",
      hint: profile.email,
      action: () => navigator.clipboard.writeText(profile.email),
    },
  ];

  const filtered = commands.filter(
    (c) =>
      c.label.toLowerCase().includes(query.toLowerCase()) ||
      c.hint.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => { setSelected(0); }, [query]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setSelected(0);
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      
      if (e.key === "Escape") { onClose(); return; }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((s) => (s + 1) % filtered.length);
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((s) => (s - 1 + filtered.length) % filtered.length);
        return;
      }
      if (e.key === "Enter" && filtered[selected]) {
        filtered[selected].action();
        onClose();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, selected, filtered, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[998] flex items-start justify-center bg-background/90 pt-[18vh]"
      onClick={onClose}
    >
      <div
        className="panel w-full max-w-lg overflow-hidden shadow-[var(--shadow-panel)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <span className="text-muted-foreground">→</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="O que você procura?"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground/50"
          />
          <kbd className="label rounded border border-border px-1.5 py-0.5">ESC</kbd>
        </div>
        
        <ul className="max-h-72 overflow-y-auto py-2">
          {filtered.length === 0 && (
            <li className="label px-4 py-8 text-center">Nenhum resultado</li>
          )}
          {filtered.map((cmd, i) => (
            <li key={cmd.id}>
              <button
                onClick={() => { cmd.action(); onClose(); }}
                onMouseEnter={() => setSelected(i)}
                className={`flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm transition-colors ${
                  selected === i
                    ? "bg-primary/10 text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="font-medium">{cmd.label}</span>
                <span className="shrink-0 text-xs text-muted-foreground/70">{cmd.hint}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 border-t border-border px-4 py-2">
          <span className="label">↓↑ navegar</span>
          <span className="label">↵ abrir</span>
          <span className="label">ESC fechar</span>
        </div>
      </div>
    </div>
  );
}