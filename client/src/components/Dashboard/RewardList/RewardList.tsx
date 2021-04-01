import React from 'react';
import { IUserReward, IRewardListProps } from '../../../interfaces';
import { Reward } from '../../../components';
import trophy from '../../../assets/images/trophy.jpg';

export default function RewardList(props: IRewardListProps): JSX.Element {
  const userRewards: IUserReward[] = props.userRewards;

  return (
    <div className="reward-list">
      {userRewards && userRewards.length ? (
        userRewards.map((reward) => <Reward key={reward.id} lessonId={reward.lessonId} />)
      ) : (
        <p className="notice">You don't have any trophies yet...</p>
      )}
    </div>
  );
}
