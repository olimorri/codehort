import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { v4 as uuidv4 } from 'uuid';
import { User } from './user.schema';
import { CreateUserDto } from './dto/creat-user.dto';

@Injectable()
export class UserService {
  async createUser(createUserDto: CreateUserDto): Promise<UserDto> {
    const id = uuidv4();
    const newUser = new User();
    newUser.id = id;
    newUser.username = createUserDto.username;
    newUser.password = createUserDto.password;
    newUser.email = createUserDto.email;

    try {
      return await newUser.save();
    } catch (error) {
      console.log(error);
    }
  }

  async loginUser(username: string, password: string) {
    const user = await this.findUser(username);
    return user.password === password ? `Welcome back, ${username}` : 'could not log in';
  }

  async getUserInfo(username: string) {
    const user = await this.findUser(username);
    if (user) return user;
    else throw new NotFoundException('user not found');
  }

  /* Helper functions */
  private findUser(username: string) {
    const user = User.findOne({ where: { username: username } });
    if (user) return user;
    else throw new NotFoundException('user not found');
  }
}
