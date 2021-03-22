import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing(): JSX.Element {
  return (
    <div className="landing">
      <h1>Welcome to Codehort!</h1>
      <Link to="/login">Sign in / up</Link>
    </div>
  );
}
