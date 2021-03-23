import { Injectable } from '@nestjs/common';
import { SummaryDto } from './dto/summary.dt';

@Injectable()
export class SummaryService {
  // TEMPORARY summary db
  summaries: SummaryDto[] = [
    { title: 'summary one', content: 'this is the first summary' },
    { title: 'summary two', content: 'this is the second summary' },
  ];

  getSummary(title: string) {
    return this.summaries.find((summary) => summary.title === title);
  }
}
