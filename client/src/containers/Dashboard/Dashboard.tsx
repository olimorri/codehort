import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/configureStore';
import { fetchLesson, fetchUserLessons } from '../../actions';
import { OtherLessonList, RewardList, UserLessonList } from '../../components';

export default function Dashboard(): JSX.Element {
  const dispatch = useDispatch();
  const user = useSelector((state: AppState) => state.user.user);
  const userLessons = useSelector((state: AppState) => state.userLessons.userLessons);

  useEffect(() => {
    const userLessonAction = fetchUserLessons(user.id);
    dispatch(userLessonAction);
  }, [user]);

  useEffect(() => {
    const lessonAction = fetchLesson();
    dispatch(lessonAction);
  }, []);

  return (
    <div className="dashboard">
      {userLessons && userLessons.length && (
        <>
          <div className="header">
            <h1>Welcome back, {user.username}!</h1>
          </div>
          <div className="content">
            <div className="left">
              <h2 className="subheader">Your Lessons</h2>
              <UserLessonList userLessons={userLessons} />
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
        </>
      )}
    </div>
  );
}
