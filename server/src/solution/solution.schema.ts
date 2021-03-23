import { Table, Column, Model, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Lesson } from 'src/lesson/lesson.schema';

@Table
export class Solution extends Model<Solution> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  solution: string; //TODO: this needs to be confirmed

  @ForeignKey(() => Lesson)
  @Column({
    type: DataType.NUMBER,
  })
  lessonId: number;

  @BelongsTo(() => Lesson)
  lesson: Lesson;
}
