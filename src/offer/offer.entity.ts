import { Voucher } from '../voucher/voucher.entity';
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  HasMany,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({})
export class Offer extends Model<Offer> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @Column
  percentage: number;

  @HasMany(() => Voucher)
  vouchers?: Voucher[];
}
