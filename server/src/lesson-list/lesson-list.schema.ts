import { Table, Column, Model, DataType, DefaultScope } from 'sequelize-typescript';

@DefaultScope(() => ({
  attributes: {
    exclude: ['createdAt', 'updatedAt'],
  },
}))
@Table
export class LessonList extends Model<LessonList> {
  //lessonList non-relational properties
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  lessonId: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lessonName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lessonSummary: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: null,
  })
  totalSteps: number;
}
