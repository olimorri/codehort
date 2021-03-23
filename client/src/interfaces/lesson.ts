import { ISolution } from './solution';
import { ITask } from './task';

export interface ILesson {
  name: string;
  summary?: string;
  numberOfTasks: number;
  solution?: ISolution;
  solutionId?: number;
  tasks?: ITask[];
}
