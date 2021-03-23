import { Injectable } from '@nestjs/common';
import { SummaryDto } from './dto/summary.dt';
import { Summary } from './summary.schema';

@Injectable()
export class SummaryService {
  async createSummaries(newSummaries: SummaryDto[]): Promise<void> {
    newSummaries.forEach((summary) => {
      const newSummary = new Summary();
      newSummary.title = summary.title;
      newSummary.content = summary.content;
      newSummary.taskId = summary.taskId;

      try {
        newSummary.save();
      } catch (error) {
        console.log(error);
      }
    });
  }

  async getSummary(summaryId: number) {
    return await Summary.findOne({ where: { id: summaryId } });
  }
}
