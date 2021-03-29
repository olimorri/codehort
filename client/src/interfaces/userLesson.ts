export interface IUserLesson {
  id: number;
  userId: string;
  lessonId: number;
  stepCompleted: number;
  lessonTitle: string;
  totalLessonSteps: number;
  userCode?: string;
}
