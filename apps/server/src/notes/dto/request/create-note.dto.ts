import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateNoteDto {
  @MaxLength(255)
  @IsNotEmpty()
  title: string;

  @IsString()
  @MaxLength(10000)
  content: string;
}
