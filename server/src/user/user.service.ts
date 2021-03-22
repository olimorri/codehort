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
      password: '12345',
    },
    {
      id: 'thisisauuid2',
      username: 'JaneDoe',
      password: '12345',
    },
  ];

  createUser(username: string, password: string) {
    const id = uuidv4();
    const newUser = { id, username, password };
    this.users.push(newUser);
    return newUser;
  }

  loginUser(username: string, password: string) {
    const user = this.finUser(username);
    return user.password === password ? `Welcome back, ${username}` : 'could not log in';
  }

  // Helper functions
  finUser(username: string) {
    const user = this.users.find((user) => user.username === username);
    if (user) return user;
    else throw new NotFoundException();
  }
}
