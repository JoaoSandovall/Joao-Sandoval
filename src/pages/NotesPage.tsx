import NoteRow from "@/components/NoteRow";
import { notes } from "@/content";
import type { Page } from "@/types/navigation";

type Props = {
  onNavigate: (page: Page) => void;
};

export default function NotesPage({ onNavigate }: Props) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <h1 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">Notas técnicas</h1>
      <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:mt-4 sm:text-lg">
        Aprendizados de projetos reais sobre arquitetura, dados e automação.
      </p>
      <div className="mt-10 divide-y divide-border sm:mt-14">
        {notes.map((note) => (
          <NoteRow key={note.slug} note={note} onNavigate={onNavigate} showSummary />
        ))}
      </div>
    </main>
  );
}
