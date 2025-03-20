import { NoteEntity } from 'src/notes/entities/note.entity';

export class NoteResponseDto {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(note: NoteEntity) {
    this.id = note.id;
    this.title = note.title;
    this.content = note.content;
    this.createdAt = note.createdAt;
    this.updatedAt = note.updatedAt;
  }
}
