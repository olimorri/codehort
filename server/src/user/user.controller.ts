import { Controller, Get, Request, NotFoundException } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('profile')
  async getProfile(@Request() req): Promise<UserDto> {
    const username = req.user.payload.username;
    const profile = await this.userService.getUserInfo(username);
    // TODO: if we have time, find better solution for this
    profile.password = undefined;
    profile.email = undefined;
    if (!profile) throw new NotFoundException(`User info for ${username} could not be found`);
    return profile;
  }

  /* Not currently being used */
  // @Public() // make publicly accessible without jwt
  // @Post('logout')
  // @HttpCode(200)
  // logout(): string {
  //   return 'You have logged out. Goodbye';
  // }
}
