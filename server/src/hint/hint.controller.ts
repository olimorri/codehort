import { Controller, Get, Param } from '@nestjs/common';
import { HintService } from './hint.service';

@Controller('hint')
export class HintController {
  constructor(private hintService: HintService) {}

  @Get(':id')
  getHint(@Param('id') id: number) {
    return this.hintService.getHint(id);
  }
}
