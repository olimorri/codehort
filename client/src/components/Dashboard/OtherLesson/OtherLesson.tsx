import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { startNewUserLesson } from '../../../actions';
import { IOtherLessonProps } from '../../../interfaces';
import { AppState } from '../../../store/configureStore';

export default function OtherLesson(props: IOtherLessonProps): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state: AppState) => state.user.user);
  const userLessons = useSelector((state: AppState) => state.userLessons.userLessons);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (isAdded) history.push(`/lesson/${props.otherLesson.lessonId}`);
  }, [userLessons]);

  const handleStart = () => {
    if (!userLessons.some((userLesson) => userLesson.lessonId === props.otherLesson.lessonId)) {
      dispatch(
        startNewUserLesson(user.id, props.otherLesson.lessonId, 0, props.otherLesson.lessonName, 6)
      );
      setIsAdded(true);
    } else history.push(`/lesson/${props.otherLesson.lessonId}`);
  };

  return (
    <div className="other-lesson">
      <h3 className="lesson-title">{props.otherLesson.lessonName}</h3>
      {props.otherLesson.lessonId === 404 ? (
        <h4 className="notice">Coming soon...</h4>
      ) : (
        <a onClick={handleStart} className="link">
          START
        </a>
      )}
    </div>
  );
}
