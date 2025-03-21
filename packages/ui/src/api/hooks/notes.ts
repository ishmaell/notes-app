import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { NoteRequestPayload } from "../../interfaces/notes";
import { createNote, fetchNotes, deleteNote } from "../queries/notes";

export const useCreateNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["create-note"],
    mutationFn: async (payload: NoteRequestPayload) => {
      const response = await createNote(payload);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });
};

export const useFetchNotes = () =>
  useQuery({
    queryKey: ["notes"],
    queryFn: async () => {
      const response = await fetchNotes();
      return response;
    },
  });

export const useDeleteNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["delete-note"],
    mutationFn: async (noteId: string) => {
      const response = await deleteNote(noteId);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });
};
