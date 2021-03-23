import { Table, Column, Model, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Lesson } from 'src/lesson/lesson.schema';

@Table
export class Solution extends Model<Solution> {
  //solution non-relational properties
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  solution: string;

  //solution has one to one relation with lesson

  @ForeignKey(() => Lesson)
  @Column({
    type: DataType.INTEGER,
  })
  lessonId: number;

  @BelongsTo(() => Lesson)
  lesson: Lesson;
}
