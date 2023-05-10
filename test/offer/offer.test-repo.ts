import { OfferRepository } from 'src/offer/offer.repository';
import { repositoriesInstances } from '../../src/shared/repositories.shared';

export const offerTestRepo = (): OfferRepository =>
  <OfferRepository>global.offerRepository ||
  repositoriesInstances.offerRepository;
