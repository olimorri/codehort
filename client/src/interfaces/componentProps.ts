import { ILessonList, IUserReward, IUserLesson } from '.';

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

export interface IOtherLessonProps {
  otherLesson: ILessonList;
}

export interface IOtherLessonListProps {
  lessonList: ILessonList[];
  userLessons: IUserLesson[];
}

export interface ILessonCardProps {
  lesson: ILessonList;
}

export interface ILessonCardListProps {
  lessonList: ILessonList[];
}

export interface ICodeEditorProps {
  userCode: string;
}
