import { Table, Column, Model, DataType, HasMany, ForeignKey, HasOne } from 'sequelize-typescript';
import { Hint } from 'src/hint/hint.schema';
import { Summary } from 'src/summary/summary.schema';
import { UserTest } from 'src/user-test/userTest.schema';

@Table
export class Task extends Model<Task> {
  //task non-relational properties
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  step: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  explanation: string;

  //one to many relationship with hint

  @HasMany(() => Hint)
  hints: Hint[];

  //one to one relationship with userTest

  @ForeignKey(() => UserTest)
  @Column({
    type: DataType.STRING,
  })
  userTestId: number;

  @HasOne(() => UserTest)
  userTest: UserTest;

  //one to one relationship with summary

  @ForeignKey(() => Summary)
  @Column({
    type: DataType.STRING,
  })
  summaryId: number;

  @HasOne(() => Summary)
  summary: Summary;

  //one to one relationship with boilerplateAnswer

  //TODO: need to discuss this
}
