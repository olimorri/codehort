import { Body, Controller, Post } from '@nestjs/common';
import { UserRewardsDto } from './dto/user-rewards.dto';
import { UserRewardsService } from './user-rewards.service';

@Controller('user-rewards')
export class UserRewardsController {
  constructor(private userRewardsService: UserRewardsService) {}

  @Post()
  async setUserReward(@Body() newUserReward: UserRewardsDto) {
    return await this.userRewardsService.addUserReward({ ...newUserReward });
  }
}
