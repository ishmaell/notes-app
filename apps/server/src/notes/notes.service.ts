import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateNoteDto } from './dto/request/create-note.dto';
import { Repository } from 'typeorm';
import { NoteEntity } from './entities/note.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { NoteResponseDto } from './dto/response/note.response.dto';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(NoteEntity)
    private readonly noteRepository: Repository<NoteEntity>,
  ) {}

  async create(createNoteDto: CreateNoteDto): Promise<NoteResponseDto> {
    if (!createNoteDto.title || createNoteDto.title.trim() === '') {
      throw new BadRequestException('Note title cannot be empty');
    }

    try {
      const note = await this.noteRepository.save(createNoteDto);
      return new NoteResponseDto(note);
    } catch (error) {
      let errorMessage = 'Failed to create note';

      if (error instanceof Error) {
        errorMessage = error.message;
      }
      throw new InternalServerErrorException(errorMessage);
    }
  }

  async findAll(): Promise<NoteResponseDto[]> {
    const notes = await this.noteRepository.find();
    return notes.map((note) => new NoteResponseDto(note));
  }

  async remove(id: number): Promise<void> {
    try {
      const result = await this.noteRepository.delete(id);

      if (result.affected === 0) {
        throw new NotFoundException(`Note with ID ${id} not found`);
      }
    } catch (error) {
      let errorMessage = 'Failed to delete note';

      if (error instanceof Error) {
        errorMessage = error.message;
      }
      throw new InternalServerErrorException(errorMessage);
    }
  }
}
