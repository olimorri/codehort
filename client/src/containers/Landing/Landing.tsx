import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing(): JSX.Element {
  return (
    <div>
      <h1>I am your Landing Page</h1>
      <Link to="/login">Sign in / up</Link>
    </div>
  );
}
