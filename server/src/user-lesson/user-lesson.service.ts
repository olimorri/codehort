import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { UserLessonDto } from './dto/user-lesson.dto';
import { UserLesson } from './userLesson.schema';

@Injectable()
export class UserLessonService {
  async setUserLesson(userLessonDto: UserLessonDto): Promise<UserLessonDto> {
    const newUserLesson = new UserLesson();
    Object.assign(newUserLesson, userLessonDto); // assign keys from userLessonDto to newUserLesson
    try {
      return await newUserLesson.save();
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('UserLesson could not be saved');
    }
  }

  async updateUserLesson(updatedUserLesson: UserLessonDto): Promise<UserLessonDto> {
    try {
      return UserLesson.findOne({
        where: { userId: updatedUserLesson.userId, lessonId: updatedUserLesson.lessonId },
      }).then((updatedLesson) => {
        return updatedLesson.update({
          stepCompleted: updatedUserLesson.stepCompleted,
        });
      });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('UserLesson could not be updated');
    }
  }

  async getUserLessons(userId: string) {
    try {
      return await UserLesson.findAll({ where: { userId: userId } });
    } catch (error) {
      console.log(error);
      throw new NotFoundException(`UserLessons for userId ${userId} not found`);
    }
  }

  async getSingleUserLesson(userId: string, lessonId: number) {
    try {
      return await UserLesson.findOne({ where: { userId: userId } && { lessonId: lessonId } });
    } catch (error) {
      console.log(error);
      throw new NotFoundException(
        `Userlesson for userId ${userId} and lessonId ${lessonId} not found`
      );
    }
  }
}
