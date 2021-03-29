import { Hint } from 'src/hint/hint.schema';
import { Summary } from 'src/summary/summary.schema';
import { UserTest } from 'src/user-test/userTest.schema';

export class TaskDto {
  id?: number;
  name: string;
  lessonId: number;
  step: number;
  explanation: string;
  hints?: Hint[];
  summaries?: Summary[];
  // userTest?: {};
}
