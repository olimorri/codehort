import { Hint } from 'src/hint/hint.schema';

export class TaskDto {
  id?: number;
  name: string;
  lessonId: number;
  step: number;
  explanation: string;
  userTestId: number;
  summaryId: number;
  hints?: Hint[];
  //summaries?: Summary[];
  //userTest?: UserTest[];
}
