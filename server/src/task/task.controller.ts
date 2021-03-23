import { Controller, Get, Param } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get(':id')
  getTask(@Param('id') id: number): TaskDto {
    return this.taskService.fetchTask(id);
  }
}
