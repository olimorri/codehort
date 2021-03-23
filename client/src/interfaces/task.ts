import { IHint } from './hint';
import { IUserTest } from './userTest';
//solution is mentioned in schema, but hasn't been made as of yet - need to see if it is necessary

export interface ITask {
  name: string;
  lessonId?: number;
  step: number;
  explanation: string;
  hints: IHint[];
  userTestId?: number;
  userTest?: IUserTest;
}
