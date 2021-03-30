import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store/configureStore';

export default function Instructions(): JSX.Element {
  const tasks = useSelector((state: AppState) => state.lesson.lesson.task);
  const userLesson = useSelector((state: AppState) => state.userLessons.userLesson);

  return (
    <div className="instructions">{<p>{tasks?.[userLesson.stepCompleted]?.explanation}</p>}</div>
  );
}
