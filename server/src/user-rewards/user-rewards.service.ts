import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UserRewardsDto } from './dto/user-rewards.dto';
import { UserReward } from './userReward.schema';

@Injectable()
export class UserRewardsService {
  async addUserReward(userRewardsDto: UserRewardsDto): Promise<UserRewardsDto> {
    const newUserReward = new UserReward();
    Object.assign(newUserReward, userRewardsDto);
    return await newUserReward.save();
  }
}
