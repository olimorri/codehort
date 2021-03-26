import React from 'react';
import { Link } from 'react-router-dom';
import { IUserLessonProps } from '../../../interfaces';

export default function UserLesson(props: IUserLessonProps): JSX.Element {
  return (
    <div className="user-lesson">
      <Link to={`/lesson/${props.lessonId}`} className="link">
        {props.name} <br />
        <br />
        Progress {(props.stepCompleted / 6) * 100}%
      </Link>
    </div>
  );
}
