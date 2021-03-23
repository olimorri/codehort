import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { HintDto } from './dto/hint.dto';
import { HintService } from './hint.service';

@Controller('hint')
export class HintController {
  constructor(private hintService: HintService) {}

  @Post()
  async createHints(@Body() hints: HintDto[]): Promise<string> {
    await this.hintService.createHints(hints);
    return 'Hints saved';
  }

  @Get(':id')
  async getHint(@Param('id') id: number): Promise<HintDto> {
    return await this.hintService.getHint(id);
  }
}
