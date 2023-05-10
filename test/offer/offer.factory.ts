import { faker } from '@faker-js/faker';
import { Offer } from 'src/offer/offer.entity';
import { offerTestRepo } from './offer.test-repo';

interface IOffer {
  name?: string;
  percentage?: number;
}
export const buildOfferParams = (obj: IOffer = {}): IOffer => {
  return {
    name: obj.name || faker.internet.userName(),
    percentage: obj.percentage || faker.datatype.number({ max: 100, min: 0 }),
  };
};

export const offerFactory = (obj: IOffer = {}): Promise<Offer> => {
  const params: IOffer = buildOfferParams(obj);
  return offerTestRepo().create(params);
};
