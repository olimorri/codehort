import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SolutionDto } from './dto/solution.dto';
import { SolutionService } from './solution.service';

@Controller('solution')
export class SolutionController {
  constructor(private solutionService: SolutionService) {}

  @Post()
  async createSolution(@Body() solution: SolutionDto): Promise<SolutionDto> {
    return await this.solutionService.createSolution({ ...solution });
  }

  @Get(':id')
  async getSolution(@Param('id') id: number): Promise<SolutionDto> {
    return await this.solutionService.fetchSolution(id);
  }
}
