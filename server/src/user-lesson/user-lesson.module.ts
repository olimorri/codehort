import { Module } from '@nestjs/common';
import { UserLessonController } from './user-lesson.controller';
import { UserLessonService } from './user-lesson.service';

@Module({
  controllers: [UserLessonController],
  providers: [UserLessonService]
})
export class UserLessonModule {}
