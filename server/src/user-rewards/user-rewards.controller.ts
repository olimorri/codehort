import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { UserRewardsDto } from './dto/user-rewards.dto';
import { UserRewardsService } from './user-rewards.service';

@Controller('user-rewards')
export class UserRewardsController {
  constructor(private userRewardsService: UserRewardsService) {}

  @Post()
  async setUserReward(@Body() newUserReward: UserRewardsDto) {
    return await this.userRewardsService.addUserReward({ ...newUserReward });
  }

  @Get(':lessonId')
  async getUserRewards(@Param('lessonId') lessonId: number) {
    const userRewards = await this.userRewardsService.getUserRewards(lessonId);
    if (!userRewards?.length)
      throw new NotFoundException(`UserRewards for lessonId ${lessonId} could not be found`);
    return userRewards;
  }
}
