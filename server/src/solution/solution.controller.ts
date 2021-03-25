import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { SolutionDto } from './dto/solution.dto';
import { SolutionService } from './solution.service';

@Controller('solution')
export class SolutionController {
  constructor(private solutionService: SolutionService) {}

  @Post()
  async createSolution(@Body() solution: SolutionDto): Promise<string> {
    try {
      await this.solutionService.createSolution({ ...solution });
      return 'solution saved';
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Solution could not be saved');
    }
  }

  @Get(':id')
  async getSolution(@Param('id') id: number): Promise<SolutionDto> {
    const solution = await this.solutionService.fetchSolution(id);
    if (!solution) throw new NotFoundException(`Solution of id ${id} could not be found`);
    return solution;
  }
}
