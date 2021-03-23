import { Injectable } from '@nestjs/common';
import { SolutionDto } from './dto/solution.dto';

@Injectable()
export class SolutionService {
  // TEMPORARY solution db
  solutions: SolutionDto[] = [
    {
      solution: 'this is the solution',
      lessonId: 1,
      id: 1,
    },
    {
      solution: 'this is another solution',
      lessonId: 1,
      id: 2,
    },
  ];

  fetchSolution(id: number) {
    return this.solutions.find((solution) => solution.id === Number(id));
  }
}
