import { Module } from '@nestjs/common';
import { VoucherService } from './voucher.service';
import { VoucherRepository } from './voucher.repository';
import { SequelizeModule } from '@nestjs/sequelize';
import { Voucher } from './voucher.entity';
import { VoucherController } from './voucher.controller';

@Module({
  imports: [SequelizeModule.forFeature([Voucher])],
  providers: [VoucherService, VoucherRepository],
  controllers: [VoucherController],
})
export class VoucherModule {}
