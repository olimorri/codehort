import {
  Table,
  Column,
  Model,
  DataType,
  DefaultScope,
  HasOne,
  HasMany,
} from 'sequelize-typescript';
import { UserReward } from 'src/user-rewards/userReward.schema';

@DefaultScope(() => ({
  attributes: {
    exclude: ['createdAt', 'updatedAt'],
  },
}))
@Table
export class User extends Model<User> {
  //user non-relational properties
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

  //one to one relationship with userRewards

  @HasMany(() => UserReward)
  userRewards: UserReward[];

  //many to many relationship with lesson through userLesson

  // @BelongsToMany(() => Lesson, () => UserLesson)
  // // lessons: Lesson[];
  // lesson: Array<Lesson & { UserLesson: UserLesson }>;

  //TODO: rewards
}
