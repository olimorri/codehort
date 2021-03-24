import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Post()
  async createTasks(@Body() tasks: TaskDto[]): Promise<string> {
    await this.taskService.createTasks(tasks);
    return 'tasks saved';
  }

  @Get(':id')
  async getTask(@Param('id') id: number): Promise<TaskDto> {
    const newTask = await this.taskService.fetchTask(id);
    if (newTask.hints && newTask.hints.length > 1) {
      newTask.hints.sort((a, b) => (a.title >= b.title ? 1 : -1));
    }
    return newTask;
  }
}
