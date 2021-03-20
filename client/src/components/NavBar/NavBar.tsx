import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(): JSX.Element {
  return (
    <div>
      <Link to="/dashboard">Profile</Link>
    </div>
  );
}
