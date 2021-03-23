import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SummaryDto } from './dto/summary.dt';
import { SummaryService } from './summary.service';

@Controller('summary')
export class SummaryController {
  constructor(private summaryService: SummaryService) {}

  @Post()
  async createSummaries(@Body() newSummaries: SummaryDto[]): Promise<string> {
    await this.summaryService.createSummaries(newSummaries);
    return 'Summaries saved';
  }

  @Get(':id')
  async getSummary(@Param('id') id: number): Promise<SummaryDto> {
    return await this.summaryService.getSummary(id);
  }
}
