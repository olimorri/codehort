import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { v4 as uuidv4 } from 'uuid';
import { User } from './user.schema';
import { CreateUserDto } from './dto/creat-user.dto';

@Injectable()
export class UserService {
  async createUser(createUserDto: CreateUserDto): Promise<UserDto> {
    const id = uuidv4();
    const newUser = new User();
    Object.assign(newUser, createUserDto); // assign keys from createUserDto to newUser instance
    newUser.id = id;

    try {
      return await newUser.save();
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  async loginUser(username: string, password: string) {
    try {
      const user = await this.findUser(username);
      return user.password === password ? `Welcome back, ${username}` : 'could not log in';
    } catch (error) {
      console.log(error);
      throw new NotFoundException('username or password wrong');
    }
  }

  async getUserInfo(username: string) {
    const user = await this.findUser(username);
    if (user) return user;
    else throw new NotFoundException('user not found');
  }

  /* Helper functions */
  private async findUser(username: string) {
    try {
      return await User.findOne({ where: { username: username } });
    } catch (error) {
      throw new InternalServerErrorException('a server error occured');
    }
  }
}
