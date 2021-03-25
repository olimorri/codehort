import React from 'react';
import { Link } from 'react-router-dom';
import { IUserLessonProps } from '../../../interfaces/componentProps';

export default function UserLesson(props: IUserLessonProps): JSX.Element {
  return (
    <div className="user-lesson">
      <Link to="/lesson:id" className="link">
        Lesson - {props.lessonId}
      </Link>
    </div>
  );
}
