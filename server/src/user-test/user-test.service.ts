import { Injectable } from '@nestjs/common';
import { UserTestDto } from './dto/user-test.dto';
import { UserTest } from './userTest.schema';

@Injectable()
export class UserTestService {
  async createUserTests(newUserTests: UserTestDto[]): Promise<void> {
    newUserTests.forEach((test) => {
      const newTest = new UserTest();
      Object.assign(newTest, test); // add keys from the test object to the newTest instance
      console.log(newTest);

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
