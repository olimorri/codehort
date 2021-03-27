import { Controller, Post, Get, Param, HttpCode, NotFoundException } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

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
