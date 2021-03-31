import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  ForeignKey,
  HasOne,
  DefaultScope,
} from 'sequelize-typescript';
import { Hint } from 'src/hint/hint.schema';
import { Lesson } from 'src/lesson/lesson.schema';
import { Summary } from 'src/summary/summary.schema';
import { UserTest } from 'src/user-test/userTest.schema';

@DefaultScope(() => ({
  attributes: {
    exclude: ['createdAt', 'updatedAt'],
  },
}))
@Table
export class Task extends Model<Task> {
  //task non-relational properties
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ForeignKey(() => Lesson)
  @Column({
    type: DataType.INTEGER,
  })
  lessonId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  step: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  explanation: string;

  //one to many relationship with hint

  @HasMany(() => Hint)
  hints: Hint[];

  //one to one relationship with userTest

  @HasMany(() => UserTest)
  userTest: UserTest[];

  //one to many relationship with summary

  @HasMany(() => Summary)
  summaries: Summary[];

  //one to one relationship with boilerplateAnswer

  //TODO: need to discuss this
}
