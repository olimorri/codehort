import React from 'react';
import { ILessonCardListProps } from '../../../interfaces';
import { LessonCard } from '../../../components';

export default function LessonCardList(props: ILessonCardListProps): JSX.Element {
  return (
    <div className="lesson-card-list">
      {props.lessonList.map((lesson) => (
        <LessonCard lesson={lesson} />
      ))}
    </div>
  );
}
