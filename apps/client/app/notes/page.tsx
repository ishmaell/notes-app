"use client";

import { NotesForm } from "@/components/notes/notes-form";
import { NoteGrid } from "@/components/notes/notes-grid";
import { useFetchNotes } from "@repo/ui/api/hooks/notes";

export default function Note() {
  const { data: notes, isLoading } = useFetchNotes();

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-center text-4xl font-semibold tracking-wider text-white mb-8">
        What&apos;s on your mind?
      </h1>

      <NotesForm />

      {isLoading ? (
        <p className="text-center text-white">Loading notes...</p>
      ) : notes?.length ? (
        <NoteGrid notes={notes} />
      ) : (
        <p className="text-center text-gray-400">No notes found.</p>
      )}
    </div>
  );
}
