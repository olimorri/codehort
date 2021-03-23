import { Injectable } from '@nestjs/common';
import { UserLessonDto } from './dto/user-lesson.dto';

@Injectable()
export class UserLessonService {
  // TEMPORARY user-lesson db
  userLessons: UserLessonDto[] = [
    {
      userId: 'userId',
      lessonId: 3,
      stepCompleted: 4,
    },
    {
      userId: 'userId',
      lessonId: 2,
      stepCompleted: 8,
    },
    {
      userId: 'user2Id',
      lessonId: 1,
      stepCompleted: 1,
    },
  ];

  getUserLessons(userId: string) {
    return this.userLessons.filter((userLesson) => userLesson.userId === userId);
  }

  getSingleUserLesson(userId: string, lessonId: number) {
    return this.userLessons.find(
      (userLesson) => userLesson.userId === userId && userLesson.lessonId == lessonId
    );
  }
}
