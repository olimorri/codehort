import { Injectable } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { Task } from './task.schema';

@Injectable()
export class TaskService {
  async createTasks(newTasks: TaskDto[]): Promise<void> {
    newTasks.forEach((task) => {
      const newTask = new Task();
      newTask.name = task.name;
      newTask.step = task.step;
      newTask.explanation = task.explanation;
      newTask.lessonId = task.lessonId;
      newTask.summaryId = task.summaryId;

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
