import React from 'react';
import { Link } from 'react-router-dom';

export default function LessonCard(): JSX.Element {
  return (
    <div className="lesson-card">
      <Link to="/lesson/:id" className="link">
        Lesson Card
      </Link>
    </div>
  );
}
