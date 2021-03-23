import { Injectable } from '@nestjs/common';
import { UserLessonDto } from './dto/user-lesson.dto';
import { UserLesson } from './userLesson.schema';

@Injectable()
export class UserLessonService {
  async getUserLessons(userId: string) {
    return await UserLesson.findAll({ where: { userId: userId } });
  }

  async getSingleUserLesson(userId: string, lessonId: number) {
    return await UserLesson.findOne({ where: { userId: userId } && { lessonId: lessonId } });
  }
}
