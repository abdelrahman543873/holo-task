import { Table, Column, Model, PrimaryKey, Unique } from 'sequelize-typescript';

@Table({})
export class User extends Model<User> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @Column
  @Unique
  email: string;
}
