import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  DefaultScope,
} from 'sequelize-typescript';
import { Task } from 'src/task/task.schema';

@DefaultScope(() => ({
  attributes: {
    exclude: ['createdAt', 'updatedAt'],
  },
}))
@Table
export class Hint extends Model<Hint> {
  //hint non-relational properties
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

  //task has many hints - one to many relationship

  @ForeignKey(() => Task)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  taskId: number;

  @BelongsTo(() => Task)
  task: Task;
}
