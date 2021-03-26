import { IUserLesson } from '.';

export interface ITaskProps {
  name: string;
  step: number | undefined;
}

export interface IUserLessonListProps {
  userLessons: IUserLesson[];
}

export interface IUserLessonProps {
  lessonId: number;
  name: string;
  stepCompleted: number;
}
