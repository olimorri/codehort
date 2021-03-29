import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store/configureStore';

export default function Instructions(): JSX.Element {
  const tasks = useSelector((state: AppState) => state.lesson.lesson.task);
  const lesson = useSelector((state: AppState) => state.lesson.lesson);
  const userLessons = useSelector((state: AppState) => state.userLessons.userLessons); //does this need to be a specific lesson

  const currentLesson = userLessons.find((userLesson) => lesson.id === userLesson.lessonId)
    ?.stepCompleted;

  return (
    <div className="instructions">
      {<p>{tasks && currentLesson && tasks[currentLesson].explanation}</p>}
    </div>
  );
}
