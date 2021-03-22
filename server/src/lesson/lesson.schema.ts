import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
  HasOne,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { Solution } from 'src/solution/solution.schema';
import { Task } from 'src/task/task.schema';
import { UserLesson } from 'src/user-lesson/userLesson.schema';
import { User } from 'src/user/user.schema';

@Table
export class Lesson extends Model<Lesson> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  summary: string;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  numberOfTasks: number;

  @ForeignKey(() => Solution)
  @Column({
    type: DataType.NUMBER,
  })
  solutionId: number;

  @HasOne(() => Solution)
  solution: Solution;

  @HasMany(() => Task)
  task: Task[];

  @BelongsToMany(() => User, () => UserLesson)
  user: User[];
}
