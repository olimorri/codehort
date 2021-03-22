import { Injectable, NotFoundException } from '@nestjs/common';
import { UserInfoDto } from './dto/user-info.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  // TEMPORARY User db
  users: UserInfoDto[] = [
    {
      id: 'thisisauuid',
      username: 'JohnDoe',
      email: 'john@doe.com',
      password: '12345',
      lessons: ['express', 'node', 'koa'],
      rewardsUnlocked: 'your unlocked rewards',
    },
    {
      id: 'thisisauuid2',
      username: 'JaneDoe',
      email: 'jane@doe.com',
      password: '12345',
      lessons: ['express', 'node'],
      rewardsUnlocked: 'your unlocked rewards',
    },
  ];

  createUser(username: string, email: string, password: string) {
    const id = uuidv4();
    const newUser = { id, username, email, password };
    this.users.push(newUser);
    return newUser;
  }

  loginUser(username: string, password: string) {
    const user = this.findUser(username);
    return user.password === password ? `Welcome back, ${username}` : 'could not log in';
  }

  getUserInfo(userId: string) {
    const user = this.users.find((user) => user.id === userId);
    if (user) return user;
    else throw new NotFoundException('user not found');
  }

  /* Helper functions */
  private findUser(username: string) {
    const user = this.users.find((user) => user.username === username);
    if (user) return user;
    else throw new NotFoundException('user not found');
  }
}
