import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store/configureStore';
import { CongratulationsAnimation } from '../../../components';
import congratulations from '../../../animations/pacmancongrats.json';

export default function Instructions(): JSX.Element {
  const tasks = useSelector((state: AppState) => state.lesson.lesson.task);
  const userLesson = useSelector((state: AppState) => state.userLessons.userLesson);
  const [isCompleted, setIsCompleted] = useState(false);

  if (userLesson.stepCompleted === userLesson.totalLessonSteps) {
    setTimeout(() => {
      setIsCompleted(true);
    }, 2550);
  }

  return (
    <div className="instructions">
      {userLesson.stepCompleted === userLesson.totalLessonSteps ? (
        !isCompleted ? (
          <CongratulationsAnimation lotti={congratulations} height={250} width={250} />
        ) : (
          <>
            <p className="completed">QUEST</p>
            <p className="completed">COMPLETED</p>
          </>
        )
      ) : (
        <p className="explanation">{tasks?.[userLesson.stepCompleted]?.explanation}</p>
      )}
    </div>
  );
}
