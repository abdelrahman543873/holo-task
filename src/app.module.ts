import { Module } from '@nestjs/common';
import { SharedConfigModule } from './shared/shared-config.module';
import { CustomerModule } from './customer/customer.module';
import { OfferModule } from './offer/offer.module';
import { VoucherModule } from './voucher/voucher.module';

@Module({
  imports: [SharedConfigModule, CustomerModule, OfferModule, VoucherModule],
})
export class AppModule {}
