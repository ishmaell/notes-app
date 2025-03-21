import { useMutation, useQuery } from "@tanstack/react-query";
import { NoteRequestPayload } from "../../interfaces/notes";
import { createNote, fetchNotes } from "../queries/notes";

export const useCreateNote = () =>
  useMutation({
    mutationKey: ["create-note"],
    mutationFn: async (payload: NoteRequestPayload) => {
      const response = await createNote(payload);
      return response;
    },
  });

export const useFetchNotes = () =>
  useQuery({
    queryKey: ["fetch-notes"],
    queryFn: async () => {
      const response = await fetchNotes();
      return response;
    },
  });
