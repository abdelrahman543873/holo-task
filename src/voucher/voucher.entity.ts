import {
  Table,
  Column,
  Model,
  PrimaryKey,
  Default,
  ForeignKey,
  DataType,
  AllowNull,
  BelongsTo,
} from 'sequelize-typescript';
import { Offer } from '../offer/offer.entity';
import { Customer } from '../customer/customer.entity';

@Table({})
export class Voucher extends Model<Voucher> {
  @PrimaryKey
  @Default(() => Math.random().toString(36).substring(2, 10))
  @Column
  code: string;

  @BelongsTo(() => Offer)
  offer: Offer;

  @ForeignKey(() => Offer)
  @Column
  offerId: number;

  @ForeignKey(() => Customer)
  @Column
  customerId: number;

  @BelongsTo(() => Customer)
  customer: Customer;

  @Column({ type: DataType.DATE })
  expiration: Date;

  @AllowNull(true)
  @Column({ type: DataType.DATE })
  usedAt: Date;
}
