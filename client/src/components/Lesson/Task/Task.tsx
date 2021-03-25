import React from 'react';
import { ITaskNameProps } from '../../../interfaces';

export default function Task(props: ITaskNameProps): JSX.Element {
  return (
    <div className="task">
      <p>{props.name}</p>
    </div>
  );
}
