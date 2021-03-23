export class LessonDto {
  id: number;
  name: string;
  summary: string;
  numberOfTasks: number;
  solutionId: number;
  // solution: any ?not sure about this one
  tasks: number[]; // not sure about data type
  // user: any ??not sure about this one
}
