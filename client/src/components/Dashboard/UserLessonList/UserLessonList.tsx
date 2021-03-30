import React from 'react';
import { IUserLesson, IUserLessonListProps } from '../../../interfaces';
import { GhostAnimation, UserLesson } from '../../../components';
import ghost from '../../../animations/ghost.json';

export default function UserLessonList(props: IUserLessonListProps): JSX.Element {
  return (
    <div className="user-lesson-list">
      {props.userLessons.length ? (
        props.userLessons.map((userLesson: IUserLesson) => (
          <UserLesson
            key={userLesson.id}
            lessonId={userLesson.lessonId}
            name={userLesson.lessonTitle}
            stepCompleted={userLesson.stepCompleted}
            totalSteps={userLesson.totalLessonSteps}
          />
        ))
      ) : (
        <>
          <p className="notice">You don't have any quests yet...</p>
          <GhostAnimation lotti={ghost} height={300} width={300} />
        </>
      )}
    </div>
  );
}
