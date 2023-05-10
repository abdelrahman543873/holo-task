import {
  Table,
  Column,
  Model,
  PrimaryKey,
  Default,
  ForeignKey,
  DataType,
  AllowNull,
} from 'sequelize-typescript';
import { Offer } from '../offer/offer.entity';
import { Customer } from '../customer/customer.entity';

@Table({})
export class Voucher extends Model<Voucher> {
  @PrimaryKey
  @Default(() => Math.random().toString(36).substring(2, 10))
  @Column
  code: string;

  @Column
  @ForeignKey(() => Offer)
  offer: number;

  @Column
  @ForeignKey(() => Customer)
  customer: number;

  @Column({ type: DataType.DATE })
  expiration: Date;

  @AllowNull(true)
  @Column({ type: DataType.DATE })
  usedAt: Date;
}
