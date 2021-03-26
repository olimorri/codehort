import React from 'react';
import { useSelector } from 'react-redux';
import { IUserLesson, IUserLessonListProps } from '../../../interfaces';
import { AppState } from '../../../store/configureStore';
import UserLesson from '../UserLesson/UserLesson';

export default function UserLessonList(props: IUserLessonListProps): JSX.Element {
  const lesson = useSelector((state: AppState) => state.lesson.lesson);

  return (
    <div className="user-lesson-list">
      {props.userLessons.map((userLesson: IUserLesson) => (
        <UserLesson
          key={userLesson.lessonId}
          lessonId={userLesson.lessonId}
          stepCompleted={userLesson.stepCompleted}
          name={lesson.name}
        />
      ))}
    </div>
  );
}
