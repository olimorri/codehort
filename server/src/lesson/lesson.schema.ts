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
  //lesson non-relational properties
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
    type: DataType.INTEGER,
    allowNull: false,
  })
  numberOfTasks: number;

  //one to one relationship with solution

  @ForeignKey(() => Solution)
  @Column({
    type: DataType.INTEGER,
  })
  solutionId: number;

  @HasOne(() => Solution)
  solution: Solution;

  //one to many relationship with task

  @HasMany(() => Task)
  task: Task[];

  //many to many relationship with user, through userLesson

  @BelongsToMany(() => User, () => UserLesson)
  user: User[];
}
