import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store/configureStore';
import { ITaskProps } from '../../../interfaces';

export default function Task(props: ITaskProps): JSX.Element {
  const userLesson = useSelector((state: AppState) => state.userLessons.userLesson);
  const stepCompleted = userLesson.stepCompleted;

  const activeClass = props.step && props.step === stepCompleted + 1 ? 'active' : '';
  const completedClass = stepCompleted === userLesson.totalLessonSteps ? 'completed' : '';

  return (
    <div className={`task ${activeClass} ${completedClass}`}>
      <p>{props.name.toUpperCase()}</p>
    </div>
  );
}
