import { Module } from '@nestjs/common';
import { OfferService } from './offer.service';
import { OfferRepository } from './offer.repository';
import { SequelizeModule } from '@nestjs/sequelize';
import { Offer } from './offer.entity';

@Module({
  imports: [SequelizeModule.forFeature([Offer])],
  providers: [OfferService, OfferRepository],
})
export class OfferModule {}
