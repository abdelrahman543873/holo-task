import { Module } from '@nestjs/common';
import { VoucherService } from './voucher.service';
import { VoucherRepository } from './voucher.repository';
import { SequelizeModule } from '@nestjs/sequelize';
import { Voucher } from './voucher.entity';

@Module({
  imports: [SequelizeModule.forFeature([Voucher])],
  providers: [VoucherService, VoucherRepository],
})
export class VoucherModule {}
