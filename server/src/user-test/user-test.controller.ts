// import { Body, Controller, Get, Param, Post } from '@nestjs/common';
// import { UserTestDto } from './dto/user-test.dto';
// import { UserTestService } from './user-test.service';

// @Controller('user-test')
// export class UserTestController {
// constructor(private userTestService: UserTestService) {}
// @Post()
// async createTests(@Body() newTests: UserTestDto[]): Promise<string> {
//   await this.userTestService.createUserTests(newTests);
//   return 'tests saved';
// }
// @Get(':id')
// async getSingleTest(@Param('id') id: number) {
//   return await this.userTestService.getSingleTest(id);
// }
// @Get('/get-by-task/:taskId')
// async getTests(@Param('taskId') taskId: number) {
//   return await this.userTestService.getTests(taskId);
// }
// }
