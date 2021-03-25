import React from 'react';
import { ITaskProps } from '../../../interfaces';

export default function Task(props: ITaskProps): JSX.Element {
  // let passed = props.passed ? 'passed' : '';
  return (
    <div className="task">
      <p>{props.name}</p>
    </div>
  );
}
