import { Module } from '@nestjs/common';
import { LessonListController } from './lesson-list.controller';
import { LessonListService } from './lesson-list.service';

@Module({
  controllers: [LessonListController],
  providers: [LessonListService],
})
export class LessonListModule {}
