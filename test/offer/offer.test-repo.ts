import { OfferRepository } from 'src/offer/offer.repository';

export const offerTestRepo = (): OfferRepository =>
  <OfferRepository>global.offerRepository;
