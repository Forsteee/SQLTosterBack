import {Task} from "../entities/tasks.entity";

export class requestDto {
  readonly request: string;
  readonly task: Task;
}
