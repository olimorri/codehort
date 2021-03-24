import { Task } from 'src/task/task.schema';

export class LessonDto {
  id?: number;
  name: string;
  summary: string;
  numberOfTasks: number;
  solutionId: number;
  // solution: any ?not sure about this one
  //tasks?: Task[]; // not sure about data type
  // user: any ??not sure about this one
}
