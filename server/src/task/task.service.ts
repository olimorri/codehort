import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { Task } from './task.schema';

@Injectable()
export class TaskService {
  async createTasks(newTasks: TaskDto[]): Promise<void> {
    newTasks.forEach((task) => {
      const newTask = new Task();
      Object.assign(newTask, task); // assign keys from task to newTask
      try {
        newTask.save();
      } catch (error) {
        console.log(error);
        throw new InternalServerErrorException('Tasks could not be saved');
      }
    });
  }

  async fetchTask(taskId: number) {
    try {
      return await Task.findOne({ where: { id: taskId }, include: { all: true, nested: true } });
    } catch (error) {
      console.log(error);
      throw new NotFoundException('Tasks could not be found');
    }
  }
}
