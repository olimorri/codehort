import { Injectable } from '@nestjs/common';
import { HintDto } from './dto/hint.dto';
import { Hint } from './hint.schema';

@Injectable()
export class HintService {
  async createHints(newHints: HintDto[]): Promise<void> {
    newHints.forEach((hint) => {
      const newHint = new Hint();
      newHint.title = hint.title;
      newHint.content = hint.content;
      newHint.taskId = hint.taskId;

      try {
        newHint.save();
      } catch (error) {
        console.log(error);
      }
    });
  }

  async getHint(hintId: number) {
    return await Hint.findOne({ where: { id: hintId } });
  }
}
