import { voucherFactory } from '../voucher/voucher.factory';

describe('get customer vouchers', () => {
  it('get customer vouchers', async () => {
    const voucher = await voucherFactory();
  });
});
