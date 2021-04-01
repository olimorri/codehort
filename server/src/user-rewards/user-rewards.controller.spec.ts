import { Test, TestingModule } from '@nestjs/testing';
import { UserRewardsController } from './user-rewards.controller';

describe('UserRewardsController', () => {
  let controller: UserRewardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserRewardsController],
    }).compile();

    controller = module.get<UserRewardsController>(UserRewardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
