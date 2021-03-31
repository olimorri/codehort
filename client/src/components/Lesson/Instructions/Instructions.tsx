import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store/configureStore';
import { CongratulationsAnimation } from '../../../components';
import congratulations from '../../../animations/pacmancongrats.json';

export default function Instructions(): JSX.Element {
  const tasks = useSelector((state: AppState) => state.lesson.lesson.task);
  const userLesson = useSelector((state: AppState) => state.userLessons.userLesson);

  return (
    <div className="instructions">
      {userLesson.stepCompleted === userLesson.totalLessonSteps ? (
        <CongratulationsAnimation lotti={congratulations} height={250} width={250} />
      ) : (
        <p>{tasks?.[userLesson.stepCompleted]?.explanation}</p>
      )}
    </div>
  );
}
