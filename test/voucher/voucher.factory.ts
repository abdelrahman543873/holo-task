import { customerFactory } from './../customer/customer.factory';
import { faker } from '@faker-js/faker';
import { voucherTestRepo } from './voucher.test-repo';
import { Voucher } from '../../src/voucher/voucher.entity';
import { offerFactory } from '../offer/offer.factory';

interface IVoucher {
  offerId?: number;
  customerId?: number;
  expiration?: Date;
  usedAt?: Date;
}
export const buildVoucherParams = async (
  obj: IVoucher = {},
): Promise<IVoucher> => {
  return {
    offerId: obj.offerId || (await offerFactory()).id,
    customerId: obj.customerId || (await customerFactory()).id,
    expiration: obj.expiration || faker.date.future(),
    usedAt: obj.usedAt || null,
  };
};

export const voucherFactory = async (obj: IVoucher = {}): Promise<Voucher> => {
  const params: IVoucher = await buildVoucherParams(obj);
  return voucherTestRepo().create(params);
};
