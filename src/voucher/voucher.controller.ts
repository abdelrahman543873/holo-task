import { Body, Controller, Get, Patch } from '@nestjs/common';
import { RedeemVoucherDto } from './dtos/redeem-voucher.dto';
import { VoucherService } from './voucher.service';

@Controller('voucher')
export class VoucherController {
  constructor(private readonly voucherService: VoucherService) {}
  @Patch('redeem')
  async redeemVoucher(@Body() redeemVoucherDto: RedeemVoucherDto) {
    return await this.voucherService.redeemVoucher(redeemVoucherDto);
  }

  @Get('generate')
  async generateVoucher() {
    return await this.voucherService.generateVoucher();
  }
}
