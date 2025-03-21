import { NoteDataPayload } from "../../../../packages/ui/src/interfaces/notes";
import { NoteCard } from "./note-card";

interface NoteGridProps {
  notes: NoteDataPayload[];
}

export function NoteGrid({ notes }: NoteGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          title={note.title}
          content={note.content}
          createdAt={note.createdAt}
        />
      ))}
    </div>
  );
}
