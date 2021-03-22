import { Injectable } from '@nestjs/common';
import { SolutionDto } from './dto/solution.dto';

@Injectable()
export class SolutionService {
  // TEMPORARY solution db
  solutions: SolutionDto[] = [
    { id: 1, solution: 'this is the solution' },
    { id: 2, solution: 'this is another solution' },
  ];

  fetchSolution(id: number) {
    return this.solutions.find((solution) => solution.id == id); // Why is this not working with strict equal??
  }
}
