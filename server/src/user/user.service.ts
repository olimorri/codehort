import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { v4 as uuidv4 } from 'uuid';
import { User } from './user.schema';
import { CreateUserDto } from './dto/creat-user.dto';

@Injectable()
export class UserService {
  async createUser(createUserDto: CreateUserDto): Promise<UserDto> {
    const id = uuidv4();
    const newUser = new User();
    try {
      Object.assign(newUser, createUserDto); // assign keys from createUserDto to newUser instance
      newUser.id = id;
      return await newUser.save();
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('An internal server error occured');
    }
  }

  async loginUser(username: string, password: string) {
    try {
      const user = await this.findUser(username);
      return user.password === password ? `Welcome back, ${username}` : 'could not log in';
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('An internal server error occured');
    }
  }

  async getUserInfo(username: string) {
    try {
      return await this.findUser(username);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('An internal server error occured');
    }
  }

  /* Helper functions */
  private async findUser(username: string) {
    try {
      return await User.findOne({ where: { username: username } });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('An internal server error occured');
    }
  }
}
