import React from 'react';
import UserLesson from '../UserLesson/UserLesson';

export default function UserLessonList(): JSX.Element {
  return (
    <div className="user-lesson-list">
      <UserLesson />
      <UserLesson />
    </div>
  );
}
