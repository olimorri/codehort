import { Controller, Get, Param } from '@nestjs/common';
import { UserLessonService } from './user-lesson.service';

@Controller('user-lesson')
export class UserLessonController {
  constructor(private userLessonService: UserLessonService) {}

  @Get(':userId')
  async getUserLessons(@Param('userId') userId: string) {
    return await this.userLessonService.getUserLessons(userId);
  }

  @Get(':userId/:lessonId')
  async getSingleUserLesson(@Param('userId') userId: string, @Param('lessonId') lessonId: number) {
    return await this.userLessonService.getSingleUserLesson(userId, lessonId);
  }
}
