import { Sequelize } from 'sequelize-typescript';
import { Hint } from 'src/hint/hint.schema';
import { Lesson } from 'src/lesson/lesson.schema';
import { Solution } from 'src/solution/solution.schema';
import { Summary } from 'src/summary/summary.schema';
import { Task } from 'src/task/task.schema';
import { UserLesson } from 'src/user-lesson/userLesson.schema';
import { UserReward } from 'src/user-rewards/userReward.schema';
import { UserTest } from 'src/user-test/userTest.schema';
import { User } from 'src/user/user.schema';
import { databaseConfig } from './database.config';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case 'DEVELOPMENT':
          config = databaseConfig.development;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([
        User,
        UserLesson,
        Lesson,
        Solution,
        Task,
        UserTest,
        Hint,
        Summary,
        UserTest,
        UserReward,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
