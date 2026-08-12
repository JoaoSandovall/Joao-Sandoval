import type { Note } from "@/content/notes";
import type { Page } from "@/types/navigation";

type Props = {
  note: Note;
  onNavigate: (page: Page) => void;
  showSummary?: boolean;
};

export default function NoteRow({ note, onNavigate, showSummary = false }: Props) {
  return (
    <button
      onClick={() => onNavigate({ id: "note", slug: note.slug })}
      className="group flex w-full items-center justify-between gap-4 py-6 text-left"
    >
      <div className="min-w-0">
        <span className="label mb-1 block">{note.category}</span>
        <h3 className="font-display text-base font-bold transition-colors group-hover:text-primary sm:text-xl">
          {note.title}
        </h3>
        {showSummary && (
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {note.summary}
          </p>
        )}
      </div>
      <span className="label hidden shrink-0 normal-case italic sm:block">{note.date}</span>
    </button>
  );
}
