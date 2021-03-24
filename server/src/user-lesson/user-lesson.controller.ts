import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserLessonDto } from './dto/user-lesson.dto';
import { UserLessonService } from './user-lesson.service';

@Controller('user-lesson')
export class UserLessonController {
  constructor(private userLessonService: UserLessonService) {}

  @Post()
  async setUserLesson(@Body() newUserLesson: UserLessonDto) {
    newUserLesson = await this.userLessonService.setUserLesson({ ...newUserLesson });
    return newUserLesson;
  }

  @Put()
  async updateUserLesson(@Body() updatedUserLesson: UserLessonDto) {
    updatedUserLesson = await this.userLessonService.updateUserLesson(updatedUserLesson);
    return updatedUserLesson;
  }

  @Get(':userId')
  async getUserLessons(@Param('userId') userId: string) {
    return await this.userLessonService.getUserLessons(userId);
  }

  @Get(':userId/:lessonId')
  async getSingleUserLesson(@Param('userId') userId: string, @Param('lessonId') lessonId: number) {
    return await this.userLessonService.getSingleUserLesson(userId, lessonId);
  }
}
