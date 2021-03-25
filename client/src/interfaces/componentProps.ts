export interface ITaskProps {
  name: string;
  step: number | undefined;
}

export interface IUserLessonProps {
  lessonId?: number;
  name?: string;
  progress: number;
}
