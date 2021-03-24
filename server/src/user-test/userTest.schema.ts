import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Task } from 'src/task/task.schema';

@Table
export class UserTest extends Model<UserTest> {
  //userTest non-relational properties

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  regex: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  message: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  suggestion: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  variableRegex: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  terminalRegex: string;

  //One to one relationship with task

  @ForeignKey(() => Task)
  @Column({
    type: DataType.INTEGER,
  })
  taskId: number;

  // Breaks code!
  // @BelongsTo(() => Task)
  // task: Task;
}
