import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ITaskProps } from '../../../interfaces';
import { AppState } from '../../../store/configureStore';

export default function Task(props: ITaskProps): JSX.Element {
  const stepCompleted = useSelector(
    (state: AppState) => state.userLessons.userLessons[0].stepCompleted
  );
  // console.log(stepCompleted);
  console.log('props.step', props.step);

  const className = props.step && props.step <= stepCompleted ? 'completed' : '';

  // useEffect(() => {
  //   console.log('stepCompleted', stepCompleted);
  // }, [stepCompleted]);

  return (
    <div className={`task ${className}`}>
      <p>{props.name}</p>
    </div>
  );
}
