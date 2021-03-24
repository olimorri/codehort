import { ISolution } from '.';
import { ITask } from '.';

export interface ILesson {
  name: string;
  summary?: string;
  numberOfTasks: number;
  solution?: ISolution;
  solutionId?: number;
  tasks?: ITask[];
}
