import React from 'react';
import { Link } from 'react-router-dom';

export default function OtherLesson(): JSX.Element {
  return (
    <div>
      <Link to="/lesson:id" className="link">
        Other Lesson
      </Link>
    </div>
  );
}
