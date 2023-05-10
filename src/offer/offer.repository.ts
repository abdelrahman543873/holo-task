import { Injectable } from '@nestjs/common';
import { Offer } from './offer.entity';
import { BaseRepository } from '../shared/abstract/repository.abstract';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class OfferRepository extends BaseRepository<Offer> {
  constructor(
    @InjectModel(Offer)
    private readonly offer: typeof Offer,
  ) {
    super(offer);
  }
}
