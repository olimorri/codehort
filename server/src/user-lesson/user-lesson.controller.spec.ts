import { Test, TestingModule } from '@nestjs/testing';
import { UserLessonController } from './user-lesson.controller';

describe('UserLessonController', () => {
  let controller: UserLessonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserLessonController],
    }).compile();

    controller = module.get<UserLessonController>(UserLessonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
