import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  DefaultScope,
} from 'sequelize-typescript';
import { Lesson } from 'src/lesson/lesson.schema';
import { Task } from 'src/task/task.schema';

@DefaultScope(() => ({
  attributes: {
    exclude: ['createdAt', 'updatedAt'],
  },
}))
@Table
export class Summary extends Model<Summary> {
  //summary non-relational properties
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  content: string;

  //one to one relationship with task

  @ForeignKey(() => Task)
  @Column({
    type: DataType.INTEGER,
  })
  taskId: number;

  @BelongsTo(() => Task)
  task: Lesson;
}
