import { Voucher } from 'src/voucher/voucher.entity';
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  Unique,
  HasMany,
} from 'sequelize-typescript';

@Table({})
export class Customer extends Model<Customer> {
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
