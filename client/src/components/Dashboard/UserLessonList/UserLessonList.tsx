import React from 'react';
import { useSelector } from 'react-redux';
import { IUserLesson } from '../../../interfaces';
import { AppState } from '../../../store/configureStore';
import UserLesson from '../UserLesson/UserLesson';

export default function UserLessonList(): JSX.Element {
  const userLessonArr: any = useSelector((state: AppState) => state.userLesson.userLesson);
  const userLessonNames = [
    'Creating an Express server from scratch',
    'Creating a Koa server from scratch',
  ];

  return (
    <div className="user-lesson-list">
      {userLessonArr.length &&
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
