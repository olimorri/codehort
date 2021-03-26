import { Table, Column, Model, DataType, ForeignKey, DefaultScope } from 'sequelize-typescript';
import { Lesson } from 'src/lesson/lesson.schema';
import { User } from 'src/user/user.schema';

@DefaultScope(() => ({
  attributes: {
    exclude: ['createdAt', 'updatedAt'],
  },
}))
@Table
export class UserLesson extends Model<UserLesson> {
  //userLesson non-relational properties
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  stepCompleted: number;

  //anchor point for the user -> lesson many to many relationship

  @ForeignKey(() => User)
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  userId: string;

  @ForeignKey(() => Lesson)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: false,
  })
  lessonId: number;

  //lessonTitle
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  lessonTitle: string;

  //totalLessonSteps
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: false,
  })
  totalLessonSteps: number;
}
