import { Test, TestingModule } from '@nestjs/testing';
import { UserLessonService } from './user-lesson.service';

describe('UserLessonService', () => {
  let service: UserLessonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserLessonService],
    }).compile();

    service = module.get<UserLessonService>(UserLessonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
