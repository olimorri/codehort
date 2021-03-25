import { ISolution } from '.';
import { ITask } from '.';

export interface ILesson {
  name: string;
  summary?: string;
  numberOfTasks: number;
  solution?: ISolution;
  solutionId?: number;
  task?: ITask[];
}

export interface ITerminalResponse {
  message: string;
  suggestion: string;
}
