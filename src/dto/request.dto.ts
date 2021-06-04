import { Task } from '../entities/tasks.entity';

export class requestDto {
  readonly request: string;
  readonly standart: string;
  readonly task: Task;
}
