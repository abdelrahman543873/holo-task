import { voucherFactory } from '../voucher/voucher.factory';
import { customerTestRepo } from './customer.test-repo';
import { CUSTOMER_VOUCHERS } from '../endpoints/customer.endpoints';
import { HTTP_METHODS_ENUM } from '../request.methods.enum';
import { testRequest } from '../mock-request';

describe('get customer vouchers', () => {
  it('get customer vouchers', async () => {
    const voucher = await voucherFactory();
    const customer = await customerTestRepo().find(voucher.customerId);
    const res = await testRequest({
      method: HTTP_METHODS_ENUM.GET,
      url: `${CUSTOMER_VOUCHERS}?email=${customer.email}`,
    });
    expect(res.body[0].vouchers.offer).toHaveProperty('name');
    expect(res.body[0].vouchers).toHaveProperty('code');
  });
});
