import { Test, TestingModule } from '@nestjs/testing';
import { LessonListService } from './lesson-list.service';

describe('LessonListService', () => {
  let service: LessonListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LessonListService],
    }).compile();

    service = module.get<LessonListService>(LessonListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
