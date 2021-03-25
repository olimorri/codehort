import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  HttpCode,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  async register(@Body() newUser: UserDto): Promise<UserDto> {
    try {
      newUser = await this.userService.createUser({
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
      });
      return newUser;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('User could not be saved');
    }
  }

  @Post('login')
  @HttpCode(200)
  async login(@Body() user: UserDto): Promise<string> {
    try {
      return await this.userService.loginUser(user.username, user.password);
    } catch (error) {
      console.log(error);
      throw new NotFoundException('username or password wrong');
    }
  }

  @Get('profile/:username')
  async getProfile(@Param('username') username: string): Promise<UserDto> {
    const profile = await this.userService.getUserInfo(username);
    if (!profile) throw new NotFoundException(`User info for ${username} could not be found`);
    return profile;
  }

  @Post('logout')
  @HttpCode(200)
  logout(): string {
    return 'You have logged out. Goodbye';
  }
}
