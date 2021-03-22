import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing(): JSX.Element {
  return (
    <div className="dashboard">
      <div className="header">
        <h1>Welcome back, Vinny!</h1>
      </div>
      <div className="content">
        <div className="left">
          <h2 className="subheader">Your Lessons</h2>
          <div className="lessons">
            <div className="lesson"></div>
          </div>
        </div>
        <div className="right">
          <h2 className="subheader">Your Rewards</h2>
          <h2 className="subheader">Ready for more?</h2>
          <Link to="/lesson:id">Get started</Link>
        </div>
      </div>
    </div>
  );
}
