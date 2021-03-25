import { IHint } from './hint';
import { ILesson } from './lesson';
import { ISolution } from './solution';
import { ITask } from './task';
import { ITaskNameProps } from './componentProps';
import { IUser } from './user';
import { IUserLesson } from './userLesson';
import { IUserTest } from './userTest';

import { SET_LESSON } from './actions';
import { SET_USER } from './actions';
import { SET_USER_LESSON } from './actions';

import { AppActions } from './actions';
import { ILessonAction } from './actions';
import { IUserAction } from './actions';
import { IUserLessonAction } from './actions';

import { ILessonState } from './states';
import { IUserState } from './states';
import { IUserLessonState } from './states';

export type {
  IHint,
  ILesson,
  ISolution,
  ITask,
  ITaskNameProps,
  IUser,
  IUserLesson,
  IUserTest,
  AppActions,
  ILessonAction,
  IUserAction,
  IUserLessonAction,
  ILessonState,
  IUserState,
  IUserLessonState,
};

export { SET_LESSON, SET_USER, SET_USER_LESSON };
