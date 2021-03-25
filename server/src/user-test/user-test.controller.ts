import { Body, Controller, Get, Param, Post, NotFoundException } from '@nestjs/common';
import { UserTestDto } from './dto/user-test.dto';
import { UserTestService } from './user-test.service';

@Controller('user-test')
export class UserTestController {
  constructor(private userTestService: UserTestService) {}
  @Post()
  async createTests(@Body() newTests: UserTestDto[]): Promise<string> {
    await this.userTestService.createUserTests(newTests);
    return 'tests saved';
  }

  @Get(':id')
  async getSingleTest(@Param('id') id: number) {
    const userTest = await this.userTestService.getSingleTest(id);
    if (!userTest) throw new NotFoundException(`Test of id ${id} could not be found`);
    return userTest;
  }

  @Get('/get-by-task/:taskId')
  async getTests(@Param('taskId') taskId: number) {
    const userTests = await this.userTestService.getTests(taskId);
    if (!userTests.length)
      throw new NotFoundException(`Tests for taskId ${taskId} could not be found`);
    return userTests;
  }
}
