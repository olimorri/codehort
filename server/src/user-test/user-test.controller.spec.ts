import { Test, TestingModule } from '@nestjs/testing';
import { UserTestController } from './user-test.controller';

describe('UserTestController', () => {
  let controller: UserTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserTestController],
    }).compile();

    controller = module.get<UserTestController>(UserTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
