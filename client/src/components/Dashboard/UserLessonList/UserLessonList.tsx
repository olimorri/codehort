import React from 'react';
import { IUserLesson, IUserLessonListProps } from '../../../interfaces';
import { UserLesson } from '../../../components';

export default function UserLessonList(props: IUserLessonListProps): JSX.Element {
  return (
    <div className="user-lesson-list">
      {props.userLessons.map((userLesson: IUserLesson) => (
        <UserLesson
          key={userLesson.lessonId}
          lessonId={userLesson.lessonId}
          stepCompleted={userLesson.stepCompleted}
          name={userLesson.lessonTitle}
        />
      ))}
    </div>
  );
}
