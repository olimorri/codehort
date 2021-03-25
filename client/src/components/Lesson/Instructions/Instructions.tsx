import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store/configureStore';

export default function Instructions(): JSX.Element {
  const tasks = useSelector((state: AppState) => state.lesson.lesson.task);
  const userLesson = useSelector((state: AppState) => state.userLesson.userLesson); //does this need to be a specific lesson
  console.log(userLesson);
  const userStep = userLesson.stepsCompleted;

  return <div className="instructions">{<p>{tasks && tasks[userStep].explanation}</p>}</div>;
}
