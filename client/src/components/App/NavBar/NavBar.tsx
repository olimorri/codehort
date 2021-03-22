import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(): JSX.Element {
  return (
    <div className="nav-bar">
      <h1>codehort</h1>
      <ul>
        <Link to="/lessons-overview" className="link">
          lessons
        </Link>
        <Link to="/dashboard" className="link">
          profile
        </Link>
      </ul>
    </div>
  );
}
