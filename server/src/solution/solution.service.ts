import { Injectable } from '@nestjs/common';
import { SolutionDto } from './dto/solution.dto';
import { Solution } from './solution.schema';

@Injectable()
export class SolutionService {
  async createSolution(createSolutionDto: SolutionDto): Promise<SolutionDto> {
    const newSolution = new Solution();
    newSolution.solution = createSolutionDto.solution;
    newSolution.lessonId = createSolutionDto.lessonId;

    try {
      return await newSolution.save();
    } catch (error) {
      console.log(error);
    }
  }

  fetchSolution(solutionId: number) {
    return Solution.findOne({ where: { id: solutionId } });
  }
}
