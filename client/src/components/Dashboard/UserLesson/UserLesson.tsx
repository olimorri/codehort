import React from 'react';
import { Link } from 'react-router-dom';
import { IUserLessonProps } from '../../../interfaces';
import ProgressBarFill from '../ProgressBarFill/ProgressBarFill';

export default function UserLesson(props: IUserLessonProps): JSX.Element {
  const progress = Math.floor((props.stepCompleted / props.totalSteps) * 10);

  //Placeholder in order to create dynamic id
  const splitName = props.name.split(' ');
  const htmlID = splitName[2];
  return (
    <div className="user-lesson">
      <Link to={`/lesson/${props.lessonId}`} className="link" id={htmlID}>
        <div className="title">{props.name}</div>
        <div className="progress">{Array(progress).fill(<ProgressBarFill />)}</div>
      </Link>
    </div>
  );
}
