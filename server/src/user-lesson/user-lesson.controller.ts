import { Body, Controller, Get, Param, Post, Put, NotFoundException } from '@nestjs/common';
import { UserLessonDto } from './dto/user-lesson.dto';
import { UserLessonService } from './user-lesson.service';

@Controller('user-lesson')
export class UserLessonController {
  constructor(private userLessonService: UserLessonService) {}

  @Post()
  async setUserLesson(@Body() newUserLesson: UserLessonDto) {
    return await this.userLessonService.setUserLesson({ ...newUserLesson });
  }

  @Put()
  async updateUserLesson(@Body() updatedUserLesson: UserLessonDto) {
    await this.userLessonService.updateUserLesson(updatedUserLesson);
    return this.userLessonService.getUserLessons(updatedUserLesson.userId);
  }

  @Get(':userId')
  async getUserLessons(@Param('userId') userId: string) {
    const userLessons = await this.userLessonService.getUserLessons(userId);
    if (!userLessons?.length) return [];
    // throw new NotFoundException(`UserLessons for userId ${userId} could not be found`);
    return userLessons;
  }

  @Get(':userId/:lessonId')
  async getSingleUserLesson(@Param('userId') userId: string, @Param('lessonId') lessonId: number) {
    const userLesson = await this.userLessonService.getSingleUserLesson(userId, lessonId);
    if (!userLesson)
      throw new NotFoundException(
        `UserLesson for userId ${userId} and lessonId ${lessonId} could not be found`
      );
    return userLesson;
  }
}
