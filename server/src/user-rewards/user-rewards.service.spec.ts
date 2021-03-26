import { Test, TestingModule } from '@nestjs/testing';
import { UserRewardsService } from './user-rewards.service';

describe('UserRewardsService', () => {
  let service: UserRewardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserRewardsService],
    }).compile();

    service = module.get<UserRewardsService>(UserRewardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
