import { Table, Column, Model, DataType, HasMany, ForeignKey, HasOne } from 'sequelize-typescript';
import { Hint } from 'src/hint/hint.schema';
import { Summary } from 'src/summary/summary.schema';

@Table
export class Task extends Model<Task> {
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

  @HasMany(() => Hint)
  hints: Hint[];

  //TODO: USERTEST - need to know what this will be - relation hasOne
  // @Column({
  //   type: DataType.STRING,
  //   allowNull: false,
  // })
  // test: string;

  @ForeignKey(() => Summary)
  @Column({
    type: DataType.STRING,
  })
  summaryId: number;

  @HasOne(() => Summary)
  summary: Summary;
}
