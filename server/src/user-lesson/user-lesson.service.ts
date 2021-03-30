import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UserLessonDto } from './dto/user-lesson.dto';
import { UserLesson } from './userLesson.schema';

@Injectable()
export class UserLessonService {
  async setUserLesson(userLessonDto: UserLessonDto): Promise<UserLessonDto> {
    const newUserLesson = new UserLesson();
    Object.assign(newUserLesson, userLessonDto); // assign keys from userLessonDto to newUserLesson
    return await newUserLesson.save();
  }

  async updateUserLesson(updatedUserLesson: UserLessonDto): Promise<UserLessonDto> {
    try {
      return UserLesson.findOne({
        where: { userId: updatedUserLesson.userId, lessonId: updatedUserLesson.lessonId },
      }).then((updatedLesson) => {
        return updatedLesson.update({
          stepCompleted: updatedUserLesson.stepCompleted,
          userCode: updatedUserLesson.userCode,
        });
      });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('An internal server error occured');
    }
  }

  async getUserLessons(userId: string) {
    try {
      const userLessons = await UserLesson.findAll({ where: { userId: userId } });
      return userLessons;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('An internal server error occured');
    }
  }

  async getSingleUserLesson(userId: string, lessonId: number) {
    try {
      return await UserLesson.findOne({ where: { userId: userId } && { lessonId: lessonId } });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('An internal server error occured');
    }
  }
}
