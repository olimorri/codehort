import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SummaryDto } from './dto/summary.dto';
import { Summary } from './summary.schema';

@Injectable()
export class SummaryService {
  async createSummaries(newSummaries: SummaryDto[]): Promise<void> {
    try {
      newSummaries.forEach((summary) => {
        const newSummary = new Summary();
        Object.assign(newSummary, summary); // assign keys from Summary to newSummary
        newSummary.save();
      });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('An internal server error occured');
    }
  }

  async getSummary(summaryId: number) {
    try {
      return await Summary.findOne({ where: { id: summaryId } });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('An internal server error occured');
    }
  }
}
