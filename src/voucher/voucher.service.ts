import { Injectable } from '@nestjs/common';
import { VoucherRepository } from './voucher.repository';
import { RedeemVoucherDto } from './dtos/redeem-voucher.dto';

@Injectable()
export class VoucherService {
  constructor(private readonly voucherRepository: VoucherRepository) {}

  async redeemVoucher(redeemVoucherDto: RedeemVoucherDto) {
    await this.voucherRepository.redeemVoucher(redeemVoucherDto);
    const voucherOffer = await this.voucherRepository.getVoucherOffer(
      redeemVoucherDto.code,
    );
    return voucherOffer.offer.percentage;
  }
}
