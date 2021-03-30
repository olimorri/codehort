import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store/configureStore';
import { ITaskProps } from '../../../interfaces';

export default function Task(props: ITaskProps): JSX.Element {
  const userLesson = useSelector((state: AppState) => state.userLessons.userLesson);
  const stepCompleted = userLesson.stepCompleted;

  const className = props.step && props.step <= stepCompleted ? 'completed' : '';

  return (
    <div className={`task ${className}`}>
      <p>{props.name.toUpperCase()}</p>
    </div>
  );
}
