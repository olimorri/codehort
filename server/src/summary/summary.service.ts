import { Injectable } from '@nestjs/common';
import { SummaryDto } from './dto/summary.dt';

@Injectable()
export class SummaryService {
  // TEMPORARY summary db
  summaries: SummaryDto[] = [
    {
      title: 'summary one',
      content: 'this is the first summary',
      taskId: 1,
      id: 1,
    },
    {
      title: 'summary two',
      content: 'this is the second summary',
      taskId: 1,
      id: 2,
    },
  ];

  getSummary(id: number) {
    return this.summaries.find((summary) => summary.id === Number(id));
  }
}
