import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Post()
  async createTasks(@Body() tasks: TaskDto[]): Promise<string> {
    try {
      await this.taskService.createTasks(tasks);
      return 'tasks saved';
    } catch (error) {
      throw new InternalServerErrorException('An internal server error occured');
    }
  }

  @Get(':id')
  async getTask(@Param('id') id: number): Promise<TaskDto> {
    const newTask = await this.taskService.fetchTask(id);
    if (!newTask) throw new NotFoundException(`Task for id ${id} could not be found`);
    return newTask;
  }
}
