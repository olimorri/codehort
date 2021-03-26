import {
  Table,
  Column,
  Model,
  DataType,
  HasOne,
  HasMany,
  DefaultScope,
} from 'sequelize-typescript';
import { Solution } from 'src/solution/solution.schema';
import { Task } from 'src/task/task.schema';

@DefaultScope(() => ({
  attributes: {
    exclude: ['createdAt', 'updatedAt'],
  },
}))
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

  @HasOne(() => Solution)
  solution: Solution;

  //one to many relationship with task

  @HasMany(() => Task)
  task: Task[];
}
