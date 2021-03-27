import React from 'react';
import { Link } from 'react-router-dom';
import { IOtherLessonProps } from '../../../interfaces';

export default function OtherLesson(props: IOtherLessonProps): JSX.Element {
  return (
    <div>
      <Link to={`/lesson/${props.otherLesson.lessonId}`} className="link">
        <p>{props.otherLesson.lessonName}</p>
      </Link>
    </div>
  );
}
