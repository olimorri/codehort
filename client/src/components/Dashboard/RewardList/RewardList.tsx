import React from 'react';
import { Reward } from '../../../components';

export default function RewardList(): JSX.Element {
  const rewards: number[] = [];

  return (
    <div className="reward-list">
      {rewards.length ? (
        rewards.map((reward) => {
          <Reward key={reward} />;
        })
      ) : (
        <p className="notice">You don't have any rewards yet...</p>
      )}
    </div>
  );
}
