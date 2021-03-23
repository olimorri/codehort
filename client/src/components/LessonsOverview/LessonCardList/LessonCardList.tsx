import React from 'react';
import LessonCard from '../LessonCard/LessonCard';

export default function LessonCardList(): JSX.Element {
  return (
    <div className="lesson-card-list">
      <LessonCard />
      <LessonCard />
    </div>
  );
}
