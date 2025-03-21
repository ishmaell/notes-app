import { useMutation } from "@tanstack/react-query";
import { NoteData } from "../../interfaces/notes";
import { createNote } from "../queries/notes";

export const useCreateNote = () =>
  useMutation({
    mutationKey: ["create-note"],
    mutationFn: async (data: NoteData) => {
      const response = await createNote(data);
      return response;
    },
  });
