import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { LessonDto } from './dto/lesson.dto';
import { Lesson } from './lesson.schema';

@Injectable()
export class LessonService {
  async createLesson(lessonDto: LessonDto): Promise<LessonDto> {
    const newLesson = new Lesson();
    newLesson.name = lessonDto.name;
    newLesson.summary = lessonDto.summary;
    newLesson.numberOfTasks = lessonDto.numberOfTasks;

    try {
      return await newLesson.save();
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('lesson could not be created');
    }
  }

  fetchLesson(lessonId: number) {
    try {
      return Lesson.findOne({
        where: { id: lessonId },
        include: { all: true, nested: true },
      });
    } catch (error) {
      console.log(error);
      throw new NotFoundException('Lesson not found');
    }
  }
}
