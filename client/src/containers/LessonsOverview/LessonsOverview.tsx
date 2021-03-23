import React from 'react';
import LessonCardList from '../../components/LessonsOverview/LessonCardList/LessonCardList';

export default function LessonsOverview(): JSX.Element {
  return (
    <div className="lessons-overview">
      <div className="header">
        <h1>What will you learn next?</h1>
      </div>
      <div className="content">
        <LessonCardList />
      </div>
    </div>
  );
}
