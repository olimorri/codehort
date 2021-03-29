import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAuthenticated, setUser } from '../../../actions';

export default function NavBar(): JSX.Element {
  const dispatch = useDispatch();

  // TODO: proper logout when implementing authentication
  const handleClick = () => {
    dispatch(setAuthenticated(false));
    dispatch(
      setUser({
        id: '',
        username: '',
        userRewards: [],
      })
    );
    localStorage.removeItem('access_token');
  };

  return (
    <div className="nav-bar">
      <Link to="/dashboard" className="link big-link">
        CODEHORT
      </Link>
      <ul>
        <Link to="/lessons-overview" className="link small-link">
          QUESTS
        </Link>
        <Link to="/dashboard" className="link small-link">
          PROFILE
        </Link>
        <Link to="/" className="link small-link" onClick={handleClick}>
          LOGOUT
        </Link>
      </ul>
    </div>
  );
}
