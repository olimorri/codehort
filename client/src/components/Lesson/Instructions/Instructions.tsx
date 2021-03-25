import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store/configureStore';

export default function Instructions(): JSX.Element {
  const tasks = useSelector((state: AppState) => state.lesson.lesson.task);
  const lesson = useSelector((state: AppState) => state.lesson.lesson);
  const userLesson = useSelector((state: AppState) => state.userLessons.userLessons); //does this need to be a specific lesson
  console.log(userLesson);
  const foundLesson = userLesson.find((urLesson) => lesson.id === urLesson.lessonId);
  console.log('foundLesson', foundLesson);
  console.log('lesson', lesson);
  const userStep = foundLesson?.stepCompleted;
  // console.log(tasks, 'tasks');
  // console.log(userStep, 'userStep');

  return (
    <div className="instructions">{<p>{tasks && userStep && tasks[userStep].explanation}</p>}</div>
  );
}
