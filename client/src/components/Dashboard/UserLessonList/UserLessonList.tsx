import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store/configureStore';
import { IUserLesson, IUserLessonListProps } from '../../../interfaces';
import { UserLesson } from '../../../components';

export default function UserLessonList(props: IUserLessonListProps): JSX.Element {
  const lesson = useSelector((state: AppState) => state.lesson.lesson);

  return (
    <div className="user-lesson-list">
      {props.userLessons.map((userLesson: IUserLesson) => (
        <UserLesson
          key={userLesson.lessonId}
          lessonId={userLesson.lessonId}
          stepCompleted={userLesson.stepCompleted}
          name={lesson.name}
        />
      ))}
    </div>
  );
}
