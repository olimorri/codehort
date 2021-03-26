import { Table, Column, Model, DataType, DefaultScope, ForeignKey } from 'sequelize-typescript';
import { User } from 'src/user/user.schema';

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

  @ForeignKey(() => User)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  userId: string;
}
