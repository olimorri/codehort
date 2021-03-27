export interface IUserLesson {
  userId: string;
  lessonId: number;
  stepCompleted: number;
  lessonTitle: string;
  totalLessonSteps: number;
  userCode?: string;
}
