import { NotesForm } from "@/components/notes-form";



export default function Note() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="font-semibold tracking-wider mb-8 text-4xl text-center text-white">
        What&apos;s on your mind?
      </h1>
      <NotesForm />
      
    </div>
  );
}
