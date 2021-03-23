import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Lesson } from 'src/lesson/lesson.schema';
import { User } from 'src/user/user.schema';

@Table
export class UserLesson extends Model<UserLesson> {
  //userLesson non-relational properties
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  stageCompleted: number;

  //anchor point for the user -> lesson many to many relationship

  @ForeignKey(() => User)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  userId: string;

  @ForeignKey(() => Lesson)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lessonId: number;
}
