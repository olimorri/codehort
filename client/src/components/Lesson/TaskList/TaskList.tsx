import React from 'react';
import Task from '../Task/Task';

export default function TaskList(): JSX.Element {
  return (
    <div className="task-list">
      <Task />
      <Task />
      <Task />
    </div>
  );
}
