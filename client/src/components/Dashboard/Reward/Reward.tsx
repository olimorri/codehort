import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store/configureStore';
import { IRewardProps } from '../../../interfaces';

export default function Reward(props: IRewardProps): JSX.Element {
  const userLessons = useSelector((state: AppState) => state.userLessons.userLessons);
  const reward = userLessons.find((userLesson) => userLesson.lessonId === +props.lessonId)
    ?.lessonTitle;

  return (
    <div className="reward">
      <p>{reward}</p>
    </div>
  );
}
