import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store/configureStore';
import { ITaskProps } from '../../../interfaces';
import { useParams } from 'react-router-dom';

export default function Task(props: ITaskProps): JSX.Element {
  const urlParams: { id: string } = useParams();
  const currentLessonId = +urlParams.id;
  const userLessons = useSelector((state: AppState) => state.userLessons.userLessons);
  const currentLesson = userLessons.filter((userLesson) => (userLesson.lessonId = currentLessonId));
  const stepCompleted = currentLesson[0].stepCompleted;

  const className = props.step && props.step <= stepCompleted ? 'completed' : '';

  return (
    <div className={`task ${className}`}>
      <p>{props.name}</p>
    </div>
  );
}
