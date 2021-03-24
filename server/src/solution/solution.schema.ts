import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  ForeignKey,
  DefaultScope,
} from 'sequelize-typescript';
import { Lesson } from 'src/lesson/lesson.schema';

@DefaultScope(() => ({
  attributes: {
    exclude: ['createdAt', 'updatedAt'],
  },
}))
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
