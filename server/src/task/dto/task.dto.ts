export class TaskDto {
  id: number;
  name: string;
  step: number;
  explanation: string;
  hints: number[]; // array of hint ids?
  userTestId: number; // only one test per task?
  summaryId: number;
  // answer: any; // TODO: change data type
}
