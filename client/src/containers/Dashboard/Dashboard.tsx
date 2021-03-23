import React from 'react';
import UserLessonList from '../../components/Dashboard/UserLessonList/UserLessonList';
import RewardList from '../../components/Dashboard/RewardList/RewardList';
import OtherLessonList from '../../components/Dashboard/OtherLessonList/OtherLessonList';

export default function Dashboard(): JSX.Element {
  return (
    <div className="dashboard">
      <div className="header">
        <h1>Welcome back, Vinny!</h1>
      </div>
      <div className="content">
        <div className="left">
          <h2 className="subheader">Your Lessons</h2>
          <UserLessonList />
        </div>
        <div className="right">
          <div className="right-top">
            <h2 className="subheader">Your Rewards</h2>
            <RewardList />
          </div>
          <div className="right-bottom">
            <h2 className="subheader">Ready for more?</h2>
            <OtherLessonList />
          </div>
        </div>
      </div>
    </div>
  );
}
