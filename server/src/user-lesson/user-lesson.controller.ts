import { Controller, Get, Param } from '@nestjs/common';
import { UserLessonService } from './user-lesson.service';

@Controller('user-lesson')
export class UserLessonController {
  constructor(private userLessonService: UserLessonService) {}

  @Get(':userId')
  getUserLessons(@Param('userId') userId: string) {
    return this.userLessonService.getUserLessons(userId);
  }

  @Get(':userId/:lessonId')
  getSingleUserLesson(@Param('userId') userId: string, @Param('lessonId') lessonId: number) {
    return this.userLessonService.getSingleUserLesson(userId, lessonId);
  }
}
