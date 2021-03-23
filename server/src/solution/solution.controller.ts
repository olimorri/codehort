import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SolutionDto } from './dto/solution.dto';
import { SolutionService } from './solution.service';

@Controller('solution')
export class SolutionController {
  constructor(private solutionService: SolutionService) {}

  @Post()
  async createSolution(@Body() solution: SolutionDto): Promise<string> {
    await this.solutionService.createSolution({ ...solution });
    return 'solution saved';
  }

  @Get(':id')
  async getSolution(@Param('id') id: number): Promise<SolutionDto> {
    return await this.solutionService.fetchSolution(id);
  }
}
