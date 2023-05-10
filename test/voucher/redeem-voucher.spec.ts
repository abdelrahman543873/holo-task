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

  it('should throw error if voucher is already used', async () => {
    const voucher = await voucherFactory({ usedAt: new Date() });
    const customer = await customerTestRepo().find(voucher.customerId);
    const res = await testRequest({
      method: HTTP_METHODS_ENUM.PATCH,
      url: VOUCHERS,
      variables: { email: customer.email, code: voucher.code },
    });
    expect(res.body.statusCode).toBe(400);
    expect(res.body.message[0]).toContain('voucher code is invalid');
  });

  it("shouldn't be able to redeem twice", async () => {
    const voucher = await voucherFactory();
    const customer = await customerTestRepo().find(voucher.customerId);
    const res = await testRequest({
      method: HTTP_METHODS_ENUM.PATCH,
      url: VOUCHERS,
      variables: { email: customer.email, code: voucher.code },
    });
    expect(+res.text).toBeGreaterThanOrEqual(1);
    const secondRedemption = await testRequest({
      method: HTTP_METHODS_ENUM.PATCH,
      url: VOUCHERS,
      variables: { email: customer.email, code: voucher.code },
    });
    expect(secondRedemption.body.statusCode).toBe(400);
    expect(secondRedemption.body.message[0]).toContain(
      'voucher code is invalid',
    );
  });
});
