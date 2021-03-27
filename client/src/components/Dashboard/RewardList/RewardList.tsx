import React from 'react';
import { IUserReward, IRewardListProps } from '../../../interfaces';
import { Reward } from '../../../components';

export default function RewardList(props: IRewardListProps): JSX.Element {
  const userRewards: IUserReward[] = props.userRewards;
  console.log(userRewards.length);

  return (
    <div className="reward-list">
      {userRewards.length ? (
        userRewards.map((reward) => <Reward key={reward.lessonId} lessonId={reward.lessonId} />)
      ) : (
        <p className="notice">You don't have any rewards yet...</p>
      )}
    </div>
  );
}
