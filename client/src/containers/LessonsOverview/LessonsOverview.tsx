import React from 'react';
import { Link } from 'react-router-dom';

export default function LessonsOverview(): JSX.Element {
  return (
    <div>
      <h1>What will you learn next?</h1>
      <Link to="/lesson">Express</Link>
    </div>
  );
}
