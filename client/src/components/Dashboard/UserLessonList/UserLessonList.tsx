import React from 'react';
import { useSelector } from 'react-redux';
import { IUserLesson } from '../../../interfaces';
import { AppState } from '../../../store/configureStore';
import UserLesson from '../UserLesson/UserLesson';

export default function UserLessonList(): JSX.Element {
  const userLessonArr: any = useSelector((state: AppState) => state.userLesson.userLesson);
  console.log(userLessonArr);

  return (
    <div className="user-lesson-list">
      {userLessonArr &&
        userLessonArr.map((userLesson: IUserLesson) => (
          <UserLesson lessonId={userLesson.lessonId} />
        ))}
    </div>
  );
}
