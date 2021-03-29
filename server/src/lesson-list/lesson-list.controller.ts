import { Body, Controller, Get, Post } from '@nestjs/common';
import { Public } from 'src/auth/public.decorator';
import { LessonListDto } from './dto/lesson-list.dto';
import { LessonListService } from './lesson-list.service';

@Controller('lesson-list')
export class LessonListController {
  constructor(private lessonListService: LessonListService) {}

  @Public()
  @Post()
  async addLesson(@Body() newLessonListItem: LessonListDto) {
    return await this.lessonListService.addLessonToList({ ...newLessonListItem });
  }

  @Public()
  @Get()
  async getList() {
    return await this.lessonListService.getLessonList();
  }
}
