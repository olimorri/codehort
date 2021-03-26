import React from 'react';
import { LessonCard } from '../../../components';

export default function LessonCardList(): JSX.Element {
  return (
    <div className="lesson-card-list">
      <LessonCard />
      <LessonCard />
    </div>
  );
}
