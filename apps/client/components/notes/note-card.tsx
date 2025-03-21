import { formatDate } from "@/lib/utils";
import { useDeleteNote } from "@repo/ui/api/hooks/notes";
import { Notebook, X } from "lucide-react";

interface NoteCardProps {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

export function NoteCard({ id, title, content, createdAt }: NoteCardProps) {
  const { mutate: deleteNote } = useDeleteNote();
  const noteId = id.toString();
  return (
    <div className="cursor-pointer relative rounded-3xl border border-gray-700 p-6 hover:shadow-sm hover:bg-gray-700 transition-all group">
      <button
        className="absolute cursor-pointer top-3 right-3 text-gray-500 hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() => deleteNote(noteId)}
        aria-label="Delete note"
      >
        <X className="h-4 w-4" />
      </button>
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <Notebook className="h-5 w-5 text-gray-500" />
        </div>
        <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
        <p className="leading-6 text-xs font-medium text-gray-100 mb-4">
          {content}
        </p>
        <p className="text-gray-200 text-sm">{formatDate(createdAt)}</p>
      </div>
    </div>
  );
}
