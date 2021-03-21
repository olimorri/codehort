import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing(): JSX.Element {
  return (
    <div>
      <h1>Welcome to Codehort! Sign in or sign up to get started.</h1>
      <Link to="/login">Sign in / up</Link>
    </div>
  );
}
