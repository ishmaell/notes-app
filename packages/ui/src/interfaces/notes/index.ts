export interface NoteDataPayload {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export type NoteRequestPayload = Omit<
  NoteDataPayload,
  "id" | "createdAt" | "updatedAt"
>;
