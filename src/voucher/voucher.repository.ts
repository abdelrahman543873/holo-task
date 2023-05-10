import { Injectable } from '@nestjs/common';
import { Voucher } from './voucher.entity';
import { BaseRepository } from '../shared/abstract/repository.abstract';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class VoucherRepository extends BaseRepository<Voucher> {
  constructor(
    @InjectModel(Voucher)
    private readonly voucher: typeof Voucher,
  ) {
    super(voucher);
  }
}
