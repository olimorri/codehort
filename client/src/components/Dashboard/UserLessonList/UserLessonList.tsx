import React from 'react';
import { IUserLesson, IUserLessonListProps } from '../../../interfaces';
import { UserLesson } from '../../../components';

export default function UserLessonList(props: IUserLessonListProps): JSX.Element {
  return (
    <div className="user-lesson-list">
      {props.userLessons.length ? (
        props.userLessons.map((userLesson: IUserLesson) => (
          <UserLesson
            key={userLesson.lessonId}
            lessonId={userLesson.lessonId}
            name={userLesson.lessonTitle}
            stepCompleted={userLesson.stepCompleted}
            totalSteps={userLesson.totalLessonSteps}
          />
        ))
      ) : (
        <p className="notice">You don't have any lessons yet...</p>
      )}
    </div>
  );
}
