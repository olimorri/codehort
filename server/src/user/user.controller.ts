import {
  Controller,
  Post,
  Get,
  Request,
  HttpCode,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/local-auth.guards';
import { Public } from 'src/auth/public.decorator';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // @Public()
  @Get('profile')
  async getProfile(@Request() req): Promise<UserDto> {
    const username = req.user.payload.username;
    const profile = await this.userService.getUserInfo(username);
    if (!profile) throw new NotFoundException(`User info for ${username} could not be found`);
    return profile;
  }

  @Public() // make publicly accessible without jwt
  @UseGuards(LocalAuthGuard) // but protect with username/password authentication
  @Post('logout')
  @HttpCode(200)
  logout(): string {
    return 'You have logged out. Goodbye';
  }
}
