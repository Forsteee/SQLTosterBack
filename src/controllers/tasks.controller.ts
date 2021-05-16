import { Controller, Get, Param } from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import { Task } from '../entities/tasks.entity';

@Controller('task')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  getAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }
  @Get(':id')
  getAllToTest(@Param('id') id: number): Promise<Task[]> {
    return this.taskService.findAllFromTest(id);
  }
}
