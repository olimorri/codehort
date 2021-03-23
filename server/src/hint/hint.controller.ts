import { Controller, Get, Param } from '@nestjs/common';
import { HintService } from './hint.service';

@Controller('hint')
export class HintController {
  constructor(private hintService: HintService) {}

  @Get(':title')
  getHint(@Param('title') title: string) {
    return this.hintService.getHint(title);
  }
}
