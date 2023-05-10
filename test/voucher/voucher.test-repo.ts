import { VoucherRepository } from '../../src/voucher/voucher.repository';

export const voucherTestRepo = (): VoucherRepository =>
  <VoucherRepository>global.voucherRepository;
