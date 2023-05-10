import { Injectable } from '@nestjs/common';
import { Voucher } from './voucher.entity';
import { BaseRepository } from '../shared/abstract/repository.abstract';
import { InjectModel } from '@nestjs/sequelize';
import { RedeemVoucherDto } from './dtos/redeem-voucher.dto';
import { Offer } from '../offer/offer.entity';

@Injectable()
export class VoucherRepository extends BaseRepository<Voucher> {
  constructor(
    @InjectModel(Voucher)
    private readonly voucher: typeof Voucher,
  ) {
    super(voucher);
  }

  redeemVoucher(redeemVoucherDto: RedeemVoucherDto) {
    return this.voucher.update(
      { usedAt: new Date() },
      { where: { code: redeemVoucherDto.code } },
    );
  }

  getVoucherOffer(code: string) {
    return this.voucher.findOne({
      where: { code },
      raw: true,
      nest: true,
      include: [{ model: Offer, attributes: ['percentage'] }],
    });
  }
}
