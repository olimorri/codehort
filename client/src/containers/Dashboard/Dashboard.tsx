import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing(): JSX.Element {
  return (
    <div>
      <h1>I am your Dashboard</h1>
      <Link to="/lesson:id">Get started</Link>
    </div>
  );
}
