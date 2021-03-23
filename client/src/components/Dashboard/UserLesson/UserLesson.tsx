import React from 'react';
import { Link } from 'react-router-dom';

export default function UserLesson(): JSX.Element {
  return (
    <div className="user-lesson">
      <Link to="/lesson:id" className="link">
        User Lesson
      </Link>
    </div>
  );
}
