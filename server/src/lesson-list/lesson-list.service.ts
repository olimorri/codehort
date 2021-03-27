import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { LessonListDto } from './dto/lesson-list.dto';
import { LessonList } from './lesson-list.schema';

@Injectable()
export class LessonListService {
  async addLessonToList(lessonListDto: LessonListDto): Promise<LessonListDto> {
    const newListItem = new LessonList();
    Object.assign(newListItem, lessonListDto);
    return await newListItem.save();
  }

  async getLessonList() {
    try {
      return await LessonList.findAll();
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('An internal server error occured');
    }
  }
}
