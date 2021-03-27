import { IUserReward, IUserLesson } from '.';

export interface IRewardProps {
  lessonId: string;
}

export interface IRewardListProps {
  userRewards: IUserReward[];
}

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

export interface IOtherLessonListProps {
  userLessons: IUserLesson[];
}
