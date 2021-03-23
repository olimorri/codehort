import { Controller, Get, Param } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get(':name')
  getTask(@Param('name') name: string): TaskDto {
    return this.taskService.fetchTask(name);
  }
}
