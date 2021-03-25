import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { LessonDto } from './dto/lesson.dto';
import { Lesson } from './lesson.schema';

@Injectable()
export class LessonService {
  async createLesson(lessonDto: LessonDto): Promise<LessonDto> {
    const newLesson = new Lesson();
    try {
      Object.assign(newLesson, lessonDto); // assign keys from lessonDto to newLesson
      return await newLesson.save();
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('An internal server error occured');
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
      throw new InternalServerErrorException('An internal server error occured');
    }
  }
}
