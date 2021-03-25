import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { HintDto } from './dto/hint.dto';
import { HintService } from './hint.service';

@Controller('hint')
export class HintController {
  constructor(private hintService: HintService) {}

  @Post()
  async createHints(@Body() hints: HintDto[]): Promise<string> {
    try {
      await this.hintService.createHints(hints);
      return 'Hints saved';
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('An internal server error occured');
    }
  }

  @Get(':id')
  async getHint(@Param('id') id: number): Promise<HintDto> {
    const hint = await this.hintService.getHint(id);
    if (!hint) throw new NotFoundException(`Hint for id ${id} could not be found`);
    return hint;
  }
}
