import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store/configureStore';
import Task from '../Task/Task';

export default function TaskList(): JSX.Element {
  const tasks = useSelector((state: AppState) => state.lesson.lesson.task);

  return (
    <div className="task-list">
      {tasks && tasks.map((task) => <Task key={task.id} name={task.name} />)}
    </div>
  );
}
