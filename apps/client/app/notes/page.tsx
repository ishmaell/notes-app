import Button from "../../components/ui/button";
import Input from "../../components/ui/input";
import TextArea from "../../components/ui/textarea";

export default function Note() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="font-semibold tracking-wider mb-8 text-4xl text-center text-white">
        What&apos;s on your mind?
      </h1>
      <Input placeholder="Title" type="text" value="" />
      <TextArea placeholder="Start writing..." value="" className="mb-4" />
      <div className="flex gap-3 justify-end">
        <Button type="submit" isLoading={false} disabled={false}>
          Submit
        </Button>
      </div>
    </div>
  );
}
