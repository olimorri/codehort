import React from 'react';
import { Link } from 'react-router-dom';
import { ILessonCardProps } from '../../../interfaces';

export default function LessonCard(props: ILessonCardProps): JSX.Element {
  return (
    <div className="lesson-card">
      <h2>{props.lesson.lessonName}</h2>
      <p>{props.lesson.lessonSummary}</p>
      <Link to={`/lesson/${props.lesson.lessonId}`} className="link">
        Get Started
      </Link>
    </div>
  );
}
