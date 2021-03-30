import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store/configureStore';
import { IRewardProps } from '../../../interfaces';
import trophy from '../../../assets/images/trophy.jpg';

export default function Reward(props: IRewardProps): JSX.Element {
  const userLessons = useSelector((state: AppState) => state.userLessons.userLessons);
  const reward = userLessons.find((userLesson) => userLesson.lessonId === +props.lessonId)
    ?.lessonTitle;

  return (
    <div className="reward">
      <img src={trophy} alt="trophy" className="trophy" />
      <p className="lesson-name">{reward}</p>
    </div>
  );
}
