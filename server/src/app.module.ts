import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { LessonModule } from './lesson/lesson.module';
import { TaskModule } from './task/task.module';
import { SolutionModule } from './solution/solution.module';
import { UserTestModule } from './user-test/user-test.module';
import { HintModule } from './hint/hint.module';
import { SummaryModule } from './summary/summary.module';
import { UserLessonModule } from './user-lesson/user-lesson.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    DatabaseModule,
    LessonModule,
    TaskModule,
    SolutionModule,
    UserTestModule,
    HintModule,
    SummaryModule,
    UserLessonModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
