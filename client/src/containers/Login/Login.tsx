import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing(): JSX.Element {
  return (
    <div className="login">
      <Link to="/dashboard">Log in</Link>
    </div>
  );
}
