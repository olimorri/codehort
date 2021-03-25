import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UserTestDto } from './dto/user-test.dto';
import { UserTest } from './userTest.schema';

@Injectable()
export class UserTestService {
  async createUserTests(newUserTests: UserTestDto[]): Promise<void> {
    newUserTests.forEach((test) => {
      try {
        const newTest = new UserTest();
        Object.assign(newTest, test); // add keys from the test object to the newTest instance
        newTest.save();
      } catch (error) {
        console.log(error);
        throw new InternalServerErrorException('An internal server error occured');
      }
    });
  }

  async getSingleTest(testId: number) {
    try {
      return await UserTest.findOne({ where: { id: testId } });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('An internal server error occured');
    }
  }

  async getTests(taskId: number) {
    try {
      return await UserTest.findAll({ where: { taskId: taskId } });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('An internal server error occured');
    }
  }
}
