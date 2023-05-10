import { Module } from '@nestjs/common';
import { OfferService } from './offer.service';

@Module({
  providers: [OfferService]
})
export class OfferModule {}
