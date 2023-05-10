import { Voucher } from '../voucher/voucher.entity';
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  Unique,
  HasMany,
  AutoIncrement,
} from 'sequelize-typescript';

@Table
export class Customer extends Model<Customer> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @Unique
  @Column
  email: string;

  @HasMany(() => Voucher, {
    foreignKey: 'customer',
  })
  vouchers?: Voucher[];
}
