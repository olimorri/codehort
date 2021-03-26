import { Table, Column, Model, DataType, DefaultScope } from 'sequelize-typescript';

@DefaultScope(() => ({
  attributes: {
    exclude: ['createdAt', 'updatedAt'],
  },
}))
@Table
export class UserReward extends Model<UserReward> {
  //userReward non-relational properties
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  lessonId: number;
}
