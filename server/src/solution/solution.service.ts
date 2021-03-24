import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { SolutionDto } from './dto/solution.dto';
import { Solution } from './solution.schema';

@Injectable()
export class SolutionService {
  async createSolution(createSolutionDto: SolutionDto): Promise<SolutionDto> {
    const newSolution = new Solution();
    Object.assign(newSolution, createSolutionDto); // assign keys from createSolutionDto to newSolution
    try {
      return await newSolution.save();
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Solution could not be saved');
    }
  }

  fetchSolution(solutionId: number) {
    try {
      return Solution.findOne({ where: { id: solutionId } });
    } catch (error) {
      console.log(error);
      throw new NotFoundException('Solution could not be found');
    }
  }
}
