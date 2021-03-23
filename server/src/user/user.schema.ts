import { Table, Column, Model, DataType, BelongsToMany } from 'sequelize-typescript';
import { Lesson } from 'src/lesson/lesson.schema';
import { UserLesson } from 'src/user-lesson/userLesson.schema';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @BelongsToMany(() => Lesson, () => UserLesson)
  lessons: Lesson[];

  //TODO: rewards
}
