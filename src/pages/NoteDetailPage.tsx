import type { Note } from "@/content/notes";

type Props = {
  note: Note;
  onBack: () => void;
};

export default function NoteDetailPage({ note, onBack }: Props) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <button onClick={onBack} className="back-link">
        ← Todas as notas
      </button>

      <span className="label mt-8 block">
        {note.category} · {note.date}
      </span>
      <h1 className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
        {note.title}
      </h1>

      <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:mt-10 sm:space-y-6 sm:text-lg">
        {note.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </main>
  );
}
