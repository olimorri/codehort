import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SolutionDto } from './dto/solution.dto';
import { Solution } from './solution.schema';

@Injectable()
export class SolutionService {
  async createSolution(createSolutionDto: SolutionDto): Promise<SolutionDto> {
    const newSolution = new Solution();
    try {
      Object.assign(newSolution, createSolutionDto); // assign keys from createSolutionDto to newSolution
      return await newSolution.save();
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('An internal server error occured');
    }
  }

  fetchSolution(solutionId: number) {
    try {
      return Solution.findOne({ where: { id: solutionId } });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('An internal server error occured');
    }
  }
}
