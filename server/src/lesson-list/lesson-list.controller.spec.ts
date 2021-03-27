import { Test, TestingModule } from '@nestjs/testing';
import { LessonListController } from './lesson-list.controller';

describe('LessonListController', () => {
  let controller: LessonListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LessonListController],
    }).compile();

    controller = module.get<LessonListController>(LessonListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
