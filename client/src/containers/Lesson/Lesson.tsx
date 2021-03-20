import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing(): JSX.Element {
  return (
    <div>
      <h1>I am a Lesson</h1>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}
