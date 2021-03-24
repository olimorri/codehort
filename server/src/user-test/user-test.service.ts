import { Injectable } from '@nestjs/common';
import { UserTestDto } from './dto/user-test.dto';
import { UserTest } from './userTest.schema';

@Injectable()
export class UserTestService {
  async createUserTests(newUserTests: UserTestDto[]): Promise<void> {
    newUserTests.forEach((test) => {
      const newTest = new UserTest();
      newTest.message = test.message;
      newTest.suggestion = test.suggestion;
      newTest.variableRegex = test.variableRegex;
      newTest.terminalRegex = test.terminalRegex;
      newTest.taskId = test.taskId;
      try {
        newTest.save();
      } catch (error) {
        console.log(error);
      }
    });
  }
  async getSingleTest(testId: number) {
    return await UserTest.findOne({ where: { id: testId } });
  }
  async getTests(taskId: number) {
    return await UserTest.findAll({ where: { taskId: taskId } });
  }
}
