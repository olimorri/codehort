import { IUserLesson } from '.';

export interface ITaskProps {
  name: string;
  step: number | undefined;
}

export interface IUserLessonProps {
  lessonId: number;
  name: string;
  stepCompleted: number;
}

export interface IUserLessonListProps {
  userLessons: IUserLesson[];
}
