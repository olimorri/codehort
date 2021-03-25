import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserLesson } from '../../actions';
import { AppState } from '../../store/configureStore';
import UserLessonList from '../../components/Dashboard/UserLessonList/UserLessonList';
import RewardList from '../../components/Dashboard/RewardList/RewardList';
import OtherLessonList from '../../components/Dashboard/OtherLessonList/OtherLessonList';

export default function Dashboard(): JSX.Element {
  const dispatch = useDispatch();
  const user = useSelector((state: AppState) => state.user.user);

  useEffect(() => {
    const userLessonAction = fetchUserLesson();
    dispatch(userLessonAction);
  }, []);

  return (
    <div className="dashboard">
      <div className="header">
        <h1>Welcome back, {user.username}!</h1>
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
