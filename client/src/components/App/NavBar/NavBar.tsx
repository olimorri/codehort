import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(): JSX.Element {
  return (
    <div className="nav-bar">
      <Link to="/dashboard" className="link big-link">
        codehort
      </Link>
      <ul>
        <Link to="/lessons-overview" className="link small-link">
          lessons
        </Link>
        <Link to="/dashboard" className="link small-link">
          profile
        </Link>
        <Link to="/" className="link small-link">
          logout
        </Link>
      </ul>
    </div>
  );
}
