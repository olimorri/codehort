import React from 'react';
import { Link } from 'react-router-dom';
import { IUserLessonProps } from '../../../interfaces';
import ProgressBarFill from '../ProgressBarFill/ProgressBarFill';

export default function UserLesson(props: IUserLessonProps): JSX.Element {
  const progress = 10;
  return (
    <div className="user-lesson">
      <div className="title">
        <Link to={`/lesson/${props.lessonId}`} className="link">
          {props.name} <br />
          <br />
        </Link>
      </div>
      <div className="progress">{Array(progress).fill(<ProgressBarFill />)}</div>
    </div>
  );
}
