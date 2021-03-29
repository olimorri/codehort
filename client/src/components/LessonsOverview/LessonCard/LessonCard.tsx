import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
  }, [userLessons]);

  const handleStart = () => {
    dispatch(startNewUserLesson(user.id, props.lesson.lessonId, 0, props.lesson.lessonName, 6));
    setIsAdded(true);
  };

  return (
    <div className="lesson-card">
      <h2>{props.lesson.lessonName.toUpperCase()}</h2>
      <p>{props.lesson.lessonSummary}</p>
      <a onClick={handleStart} className="link">
        START
      </a>
    </div>
  );
}
