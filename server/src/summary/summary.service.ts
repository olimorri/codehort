import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { SummaryDto } from './dto/summary.dto';
import { Summary } from './summary.schema';

@Injectable()
export class SummaryService {
  async createSummaries(newSummaries: SummaryDto[]): Promise<void> {
    newSummaries.forEach((summary) => {
      const newSummary = new Summary();
      Object.assign(newSummary, summary); // assign keys from Summary to newSummary
      try {
        newSummary.save();
      } catch (error) {
        console.log(error);
        throw new InternalServerErrorException('Summaries could not be saved');
      }
    });
  }

  async getSummary(summaryId: number) {
    try {
      return await Summary.findOne({ where: { id: summaryId } });
    } catch (error) {
      console.log(error);
      throw new NotFoundException('Summaries could not be found');
    }
  }
}
