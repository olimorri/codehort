import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store/configureStore';
import { ITaskProps } from '../../../interfaces';

export default function Task(props: ITaskProps): JSX.Element {
  const stepCompleted = useSelector(
    (state: AppState) => state.userLessons.userLessons[0].stepCompleted
  );

  const className = props.step && props.step <= stepCompleted ? 'completed' : '';

  return (
    <div className={`task ${className}`}>
      <p>{props.name}</p>
    </div>
  );
}
