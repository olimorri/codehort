import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HintDto } from './dto/hint.dto';
import { Hint } from './hint.schema';

@Injectable()
export class HintService {
  async createHints(newHints: HintDto[]): Promise<void> {
    try {
      newHints.forEach((hint) => {
        const newHint = new Hint();
        Object.assign(newHint, hint); // assign hint keys to newHint instance
        newHint.save();
      });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('An internal server error occured');
    }
  }

  async getHint(hintId: number) {
    try {
      return await Hint.findOne({ where: { id: hintId } });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('An internal server error occured');
    }
  }
}
