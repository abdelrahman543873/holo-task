import {
  Table,
  Column,
  Model,
  PrimaryKey,
  HasMany,
} from 'sequelize-typescript';
import { Voucher } from 'src/voucher/voucher.entity';

@Table({})
export class Offer extends Model<Offer> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @Column
  percentage: number;

  @HasMany(() => Voucher, {
    foreignKey: 'offer',
  })
  vouchers?: Voucher[];
}
