import {
  addUserLesson,
  getSingleUserLesson,
  getUserLessons,
  updateUserLessonProgress,
} from '../lib/apiService';
import {
  ADD_USER_LESSON,
  IAddUserLessonAction,
  IUserLesson,
  IUserLessonsAction,
  SET_USER_LESSONS,
  IUserLessonAction,
  SET_USER_LESSON,
} from '../interfaces';
import { Dispatch } from 'react';

export function fetchUserLessons(userId: string) {
  return function (dispatch: Dispatch<IUserLessonsAction>): void {
    getUserLessons(userId).then((userLessons) => {
      dispatch(setUserLessons(userLessons));
    });
  };
}

export function fetchSingleUserLesson(userId: string, lessonId: number) {
  return function (dispatch: Dispatch<IUserLessonAction>): void {
    getSingleUserLesson(userId, lessonId).then((userLesson) => {
      dispatch(setUserLesson(userLesson));
    });
  };
}

export function startNewUserLesson(
  userId: string,
  lessonId: number,
  stepCompleted: number,
  lessonTitle: string,
  totalLessonSteps: number
) {
  return function (dispatch: Dispatch<IAddUserLessonAction>): void {
    addUserLesson(userId, lessonId, stepCompleted, lessonTitle, totalLessonSteps).then(
      (userLesson) => {
        dispatch(addNewUserLesson(userLesson));
      }
    );
  };
}

export function updateUserLessons(
  userId: string,
  lessonId: number,
  stepCompleted: number,
  lessonTitle: string,
  totalLessonSteps: number,
  userCode: string
) {
  return function (dispatch: Dispatch<IUserLessonsAction>): void {
    updateUserLessonProgress(
      userId,
      lessonId,
      stepCompleted,
      lessonTitle,
      totalLessonSteps,
      userCode
    ).then((userLessons) => {
      dispatch(setUserLessons(userLessons));
    });
  };
}

export function addNewUserLesson(userLesson: IUserLesson): IAddUserLessonAction {
  return {
    type: ADD_USER_LESSON,
    payload: userLesson,
  };
}

export function setUserLessons(userLessons: IUserLesson[]): IUserLessonsAction {
  return {
    type: SET_USER_LESSONS,
    payload: userLessons,
  };
}

export function setUserLesson(userLesson: IUserLesson): IUserLessonAction {
  return {
    type: SET_USER_LESSON,
    payload: userLesson,
  };
}
