import { Notebook } from "lucide-react";

interface NoteCardProps {
  title: string;
  content: string;
  createdAt: string;
}

export function NoteCard({ title, content, createdAt }: NoteCardProps) {
  return (
    <div className="rounded-3xl border border-gray-200 p-6 bg-white hover:shadow-sm transition-shadow">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <Notebook className="h-5 w-5 text-gray-500" />
        </div>
        <h3 className="text-sm font-bold text-black mb-2">{title}</h3>
        <p className="text-xs font-medium text-gray-800 mb-4">{content}</p>
        <p className="text-gray-500 text-sm">{createdAt}</p>
      </div>
    </div>
  );
}
