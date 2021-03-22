import { Module } from '@nestjs/common';
import { HintController } from './hint.controller';
import { HintService } from './hint.service';

@Module({
  controllers: [HintController],
  providers: [HintService]
})
export class HintModule {}
