import { Test, TestingModule } from '@nestjs/testing';
import { HintService } from './hint.service';

describe('HintService', () => {
  let service: HintService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HintService],
    }).compile();

    service = module.get<HintService>(HintService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
