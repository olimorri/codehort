import { Body, Controller, Get, Post } from '@nestjs/common';
import { LessonListDto } from './dto/lesson-list.dto';
import { LessonListService } from './lesson-list.service';

@Controller('lesson-list')
export class LessonListController {
  constructor(private lessonListService: LessonListService) {}

  @Post()
  async addLesson(@Body() newLessonListItem: LessonListDto) {
    return await this.lessonListService.addLessonToList({ ...newLessonListItem });
  }

  @Get()
  async getList() {
    return await this.lessonListService.getLessonList();
  }
}
