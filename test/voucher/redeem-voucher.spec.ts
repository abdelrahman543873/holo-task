import { customerTestRepo } from './../customer/customer.test-repo';
import { voucherFactory } from '../voucher/voucher.factory';
import { VOUCHERS } from '../endpoints/vouchers.endpoints';
import { HTTP_METHODS_ENUM } from '../request.methods.enum';
import { testRequest } from '../mock-request';

describe('redeem customer voucher', () => {
  it('redeem customer vouchers', async () => {
    const voucher = await voucherFactory();
    const customer = await customerTestRepo().find(voucher.customerId);
    const res = await testRequest({
      method: HTTP_METHODS_ENUM.PATCH,
      url: VOUCHERS,
      variables: { email: customer.email, code: voucher.code },
    });
    expect(+res.text).toBeGreaterThanOrEqual(1);
  });
});
