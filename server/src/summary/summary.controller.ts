import { Controller, Get, Param } from '@nestjs/common';
import { SummaryService } from './summary.service';

@Controller('summary')
export class SummaryController {
  constructor(private summaryService: SummaryService) {}

  @Get(':id')
  getSummary(@Param('id') id: number) {
    return this.summaryService.getSummary(id);
  }
}
