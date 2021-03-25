import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { SummaryDto } from './dto/summary.dto';
import { SummaryService } from './summary.service';

@Controller('summary')
export class SummaryController {
  constructor(private summaryService: SummaryService) {}

  @Post()
  async createSummaries(@Body() newSummaries: SummaryDto[]): Promise<string> {
    try {
      await this.summaryService.createSummaries(newSummaries);
      return 'Summaries saved';
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Summaries could not be saved');
    }
  }

  @Get(':id')
  async getSummary(@Param('id') id: number): Promise<SummaryDto> {
    const summary = await this.summaryService.getSummary(id);
    if (!summary) throw new NotFoundException(`Summary of id ${id} could not be found`);
    return summary;
  }
}
