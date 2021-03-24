import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { HintDto } from './dto/hint.dto';
import { Hint } from './hint.schema';

@Injectable()
export class HintService {
  async createHints(newHints: HintDto[]): Promise<void> {
    newHints.forEach((hint) => {
      const newHint = new Hint();
      Object.assign(newHint, hint); // assign hint keys to newHint instance
      try {
        newHint.save();
      } catch (error) {
        console.log(error);
        throw new InternalServerErrorException('a server error occured');
      }
    });
  }

  async getHint(hintId: number) {
    try {
      return await Hint.findOne({ where: { id: hintId } });
    } catch (error) {
      console.log(error);
      throw new NotFoundException('Hint could not be loaded');
    }
  }
}
