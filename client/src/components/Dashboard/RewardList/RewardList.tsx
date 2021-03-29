import React from 'react';
import { IUserReward, IRewardListProps } from '../../../interfaces';
import { Reward } from '../../../components';

export default function RewardList(props: IRewardListProps): JSX.Element {
  const userRewards: IUserReward[] = props.userRewards;

  return (
    <div className="reward-list">
      {userRewards && userRewards.length ? (
        userRewards.map((reward) => <Reward key={reward.lessonId} lessonId={reward.lessonId} />)
      ) : (
        <p className="notice">You don't have any trophies yet...</p>
      )}
    </div>
  );
}
