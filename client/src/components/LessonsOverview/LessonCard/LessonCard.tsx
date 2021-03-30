import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../store/configureStore';
import { ILessonCardProps } from '../../../interfaces';
import { startNewUserLesson } from '../../../actions/index';

export default function LessonCard(props: ILessonCardProps): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state: AppState) => state.user.user);
  const userLessons = useSelector((state: AppState) => state.userLessons.userLessons);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (isAdded) history.push(`/lesson/${props.lesson.lessonId}`);
  }, [userLessons, isAdded]);

  const handleStart = () => {
    if (!userLessons.some((userLesson) => userLesson.lessonId === props.lesson.lessonId)) {
      dispatch(
        startNewUserLesson(
          user.id,
          props.lesson.lessonId,
          0,
          props.lesson.lessonName,
          props.lesson.totalSteps
        )
      );
      setIsAdded(true);
    } else history.push(`/lesson/${props.lesson.lessonId}`);
  };

  return (
    <div className="lesson-card">
      <h2>{props.lesson.lessonName.toUpperCase()}</h2>
      <p>{props.lesson.lessonSummary}</p>
      {props.lesson.lessonId === 404 ? (
        <h3 className="coming-soon">Coming soon...</h3>
      ) : (
        <a onClick={handleStart} className="link">
          START
        </a>
      )}
    </div>
  );
}
