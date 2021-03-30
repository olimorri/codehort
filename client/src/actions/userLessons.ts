import { addUserLesson, getUserLessons, updateUserLessonProgress } from '../lib/apiService';
import {
  ADD_USER_LESSON,
  IAddUserLessonAction,
  IUserLesson,
  IUserLessonsAction,
  SET_USER_LESSONS,
} from '../interfaces';
import { Dispatch } from 'react';

export function fetchUserLessons(userId: string) {
  return function (dispatch: Dispatch<IUserLessonsAction>): void {
    getUserLessons(userId)
      .then((userLessons) => {
        dispatch(setUserLessons(userLessons));
      })
      .catch((e) => console.error(e));
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
