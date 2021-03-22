import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  // TEMPORARY User db
  users: CreateUserDto[] = [
    {
      username: 'JohnDoe',
      password: '12345',
    },
    {
      username: 'JaneDoe',
      password: '12345',
    },
  ];

  createUser(username: string, password: string) {
    const newUser = { username, password };
    this.users.push(newUser);
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
