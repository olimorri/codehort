import { Injectable } from '@nestjs/common';
import { UserLessonDto } from './dto/user-lesson.dto';
import { UserLesson } from './userLesson.schema';

@Injectable()
export class UserLessonService {
  async setUserLesson(userLessonDto: UserLessonDto): Promise<UserLessonDto> {
    const newUserLesson = new UserLesson();
    newUserLesson.stepCompleted = userLessonDto.stepCompleted;
    newUserLesson.userId = userLessonDto.userId;
    newUserLesson.lessonId = userLessonDto.lessonId;
    try {
      return await newUserLesson.save();
    } catch (error) {
      console.log(error);
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
    }
  }

  async getUserLessons(userId: string) {
    return await UserLesson.findAll({ where: { userId: userId } });
  }

  async getSingleUserLesson(userId: string, lessonId: number) {
    return await UserLesson.findOne({ where: { userId: userId } && { lessonId: lessonId } });
  }
}
