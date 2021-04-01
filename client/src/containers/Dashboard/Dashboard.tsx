import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/configureStore';
import { fetchLessonList, fetchUserLessons } from '../../actions';
import { LottieAnimation, OtherLessonList, RewardList, UserLessonList } from '../../components';
import pacmanLoader from '../../animations/pacmanLoader.json';

export default function Dashboard(): JSX.Element {
  const dispatch = useDispatch();
  const lessonList = useSelector((state: AppState) => state.lessonList.lessonList);
  const user = useSelector((state: AppState) => state.user.user);
  const userLessons = useSelector((state: AppState) => state.userLessons.userLessons);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lessonListAction = fetchLessonList();
    dispatch(lessonListAction);
    setTimeout(() => {
      setIsLoading(false);
    }, 1900);
  }, []);

  useEffect(() => {
    const userLessonAction = fetchUserLessons(user.id);
    dispatch(userLessonAction);
    setTimeout(() => {
      setIsLoading(false);
    }, 1900);
  }, [user]);

  return (
    <div className="dashboard">
      {isLoading ? (
        <LottieAnimation lotti={pacmanLoader} height={500} width={500} />
      ) : (
        <>
          {userLessons && lessonList && (
            <>
              <div className="header">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(`WELCOME BACK ${user.username.toUpperCase()}!`)
                      .pauseFor(2500)
                      .start();
                  }}
                />
              </div>
              <div className="content">
                <div className="left">
                  <h2 className="subheader">CURRENT QUESTS</h2>
                  <UserLessonList userLessons={userLessons} />
                </div>
                <div className="right">
                  <div className="right-top">
                    <h2 className="subheader">TROPHIES</h2>
                    <RewardList userRewards={user.userRewards} />
                  </div>
                  <div className="right-bottom">
                    <h2 className="subheader">LEVEL UP</h2>
                    <OtherLessonList userLessons={userLessons} lessonList={lessonList} />
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
