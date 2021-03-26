import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store/configureStore';

export default function Instructions(): JSX.Element {
  const tasks = useSelector((state: AppState) => state.lesson.lesson.task);
  const lesson = useSelector((state: AppState) => state.lesson.lesson);
  const userLesson = useSelector((state: AppState) => state.userLessons.userLessons); //does this need to be a specific lesson

  const foundLesson = userLesson.find((urLesson) => lesson.id === urLesson.lessonId);
  const userStep = foundLesson?.stepCompleted;

  return (
    <div className="instructions">{<p>{tasks && userStep && tasks[userStep].explanation}</p>}</div>
  );
}
