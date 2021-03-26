import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser } from '../../../actions';

export default function NavBar(): JSX.Element {
  const dispatch = useDispatch();

  // TODO: proper logout when implementing authentication
  const handleClick = () => {
    dispatch(
      setUser({
        id: '',
        username: '',
        password: '',
        email: '',
      })
    );
  };

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
        <Link to="/" className="link small-link" onClick={handleClick}>
          logout
        </Link>
      </ul>
    </div>
  );
}
