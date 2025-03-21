import { NoteData } from "../../interfaces/notes";

export async function createNote(noteData: NoteData) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(noteData),
  });

  if (!response.ok) {
    throw new Error("Failed to create note");
  }

  return response.json();
}

export async function fetchNotes() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/notes`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

export async function deleteNote(noteId: string): Promise<void> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/notes/${noteId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
}
