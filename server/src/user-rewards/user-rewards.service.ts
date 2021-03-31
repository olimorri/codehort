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

  async getUserRewards(lessonId: number) {
    try {
      return await UserReward.findAll({ where: { lessonId: lessonId } });
    } catch (error) {
      throw new InternalServerErrorException('An internal server error occured');
    }
  }
}
