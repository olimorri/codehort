import { Injectable } from '@nestjs/common';
import { HintDto } from './dto/hint.dto';

@Injectable()
export class HintService {
  // TEMPORARY hint db
  hints: HintDto[] = [
    {
      title: 'hint one',
      content: 'this is a first hint',
      taskId: 1,
      id: 1,
    },
    {
      title: 'hint two',
      content: 'this is a second hint',
      taskId: 2,
      id: 2,
    },
  ];

  getHint(id: number) {
    return this.hints.find((hint) => hint.id === Number(id));
  }
}
