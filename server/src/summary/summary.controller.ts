import { Controller, Get, Param } from '@nestjs/common';
import { SummaryService } from './summary.service';

@Controller('summary')
export class SummaryController {
  constructor(private summaryService: SummaryService) {}

  @Get(':title')
  getSummary(@Param('title') title: string) {
    return this.summaryService.getSummary(title);
  }
}
