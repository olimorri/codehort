import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UserRewardsController } from './user-rewards.controller';
import { UserRewardsService } from './user-rewards.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserRewardsController],
  providers: [UserRewardsService],
})
export class UserRewardsModule {}
