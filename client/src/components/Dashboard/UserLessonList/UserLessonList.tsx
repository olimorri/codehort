import React from 'react';
import { useSelector } from 'react-redux';
import { IUserLesson, IUserLessonListProps } from '../../../interfaces';
import { AppState } from '../../../store/configureStore';
import UserLesson from '../UserLesson/UserLesson';

export default function UserLessonList(props: IUserLessonListProps): JSX.Element {
  const userLessonArr: IUserLesson[] = useSelector(
    (state: AppState) => state.userLessons.userLessons
  );
  const userLessonNames = [
    'Creating an Express server from scratch',
    'Creating a Koa server from scratch',
  ];

  return (
    <div className="user-lesson-list">
      {userLessonArr &&
        userLessonArr.length &&
        userLessonArr.map((userLesson: IUserLesson) => (
          <UserLesson
            lessonId={userLesson.lessonId}
            name={userLessonNames[userLessonArr.indexOf(userLesson)]}
            progress={3}
          />
        ))}
    </div>
  );
}
