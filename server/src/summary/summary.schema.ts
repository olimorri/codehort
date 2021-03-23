import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Lesson } from 'src/lesson/lesson.schema';
import { Task } from 'src/task/task.schema';

@Table
export class Summary extends Model<Summary> {
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
  })
  taskId: number;

  @BelongsTo(() => Task)
  task: Lesson;
}
