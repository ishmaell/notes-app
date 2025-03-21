"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import Input from "@/components/ui/input";
import TextArea from "@/components/ui/textarea";
import Button from "@/components/ui/button";
import { useCreateNote } from "@repo/ui/api/hooks/notes";
import { toast } from "react-toastify";

const notesSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
});

export const NotesForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(notesSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const title = watch("title");
  const content = watch("content");

  const { isPending, mutate: createNote } = useCreateNote();

  const onSubmit = (note: z.infer<typeof notesSchema>) => {
    createNote(note, {
      onSuccess: () => {
        toast.success("Note was added successfully");
        reset();
      },
      onError: () => {
        toast.error("Adding note failed");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
      <div className="mb-4">
        <Input placeholder="Title" type="text" {...register("title")} />
      </div>

      <div className="mb-4">
        <TextArea placeholder="Start writing..." {...register("content")} />
      </div>

      <div className="flex gap-3 justify-end">
        <Button
          type="submit"
          isLoading={isSubmitting || isPending}
          disabled={isSubmitting || isPending || !title || !content}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};
