import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store/configureStore';

export default function Instructions(): JSX.Element {
  const tasks = useSelector((state: AppState) => state.lesson.lesson.task);
  //const lesson = useSelector((state: AppState) => state.lesson.lesson);
  const userLesson = useSelector((state: AppState) => state.userLessons.userLesson); //does this need to be a specific lesson

  // const currentLesson =
  //   userLessons.find((userLesson) => lesson.id === userLesson.lessonId)?.stepCompleted ?? 100; // 100 is to ensure that this is a number, and to easily debug if not a number. Low priority: this can undoubtedly be solved in a less ugly way.

  return (
    <div className="instructions">{<p>{tasks?.[userLesson.stepCompleted]?.explanation}</p>}</div>
  );
}
