import { Injectable } from '@nestjs/common';
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
      }
    });
  }

  async fetchTask(taskId: number) {
    return await Task.findOne({ where: { id: taskId }, include: { all: true, nested: true } });
  }
}
