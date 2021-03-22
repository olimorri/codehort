import { Injectable } from '@nestjs/common';
import { HintDto } from './dto/hint.dto';

@Injectable()
export class HintService {
  // TEMPORARY hint db
  hints: HintDto[] = [
    { title: 'hint one', content: 'this is a first hint' },
    { title: 'hint two', content: 'this is a second hint' },
  ];

  getHint(title: string) {
    return this.hints.find((hint) => hint.title === title);
  }
}
