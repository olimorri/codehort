import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Post()
  async createTasks(@Body() tasks: TaskDto[]): Promise<void> {
    this.taskService.createTasks(tasks);
  }

  @Get(':id')
  async getTask(@Param('id') id: number): Promise<TaskDto> {
    return await this.taskService.fetchTask(id);
  }
}
