import { Controller, Get, Param } from '@nestjs/common';
import { SolutionDto } from './dto/solution.dto';
import { SolutionService } from './solution.service';

@Controller('solution')
export class SolutionController {
  constructor(private solutionService: SolutionService) {}

  @Get(':id')
  getSolution(@Param('id') id: number): SolutionDto {
    return this.solutionService.fetchSolution(id);
  }
}
