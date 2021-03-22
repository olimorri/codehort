import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Task } from 'src/task/task.schema';

@Table
export class Hint extends Model<Hint> {
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

  @ForeignKey(() => Task)
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  taskId: number;

  @BelongsTo(() => Task)
  task: Task;
}
