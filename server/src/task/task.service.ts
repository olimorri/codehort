import { Injectable } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';

@Injectable()
export class TaskService {
  // TEMPORARY task db
  tasks: TaskDto[] = [
    {
      id: 1,
      name: 'import express',
      step: 1,
      explanation: 'import express to use it',
      userTestId: 1,
      hints: [1, 2, 3],
      summaryId: 1,
      // answer: 'this is an answer',
    },
    {
      id: 2,
      name: 'require express',
      step: 1,
      explanation: 'requre express to use it',
      userTestId: 1,
      hints: [1, 2, 3],
      summaryId: 1,
      // answer: 'this is an answer',
    },
  ];

  fetchTask(id: number) {
    console.log(id);
    return this.tasks.find((task) => task.id === Number(id));
  }
}
