import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing(): JSX.Element {
  return (
    <div>
      <h1>I am your Log in/Register Page</h1>
      <Link to="/dashboard">Log in</Link>
    </div>
  );
}
