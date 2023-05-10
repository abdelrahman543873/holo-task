import { VoucherRepository } from '../../src/voucher/voucher.repository';
import { repositoriesInstances } from '../../src/shared/repositories.shared';

export const voucherTestRepo = (): VoucherRepository =>
  <VoucherRepository>global.voucherRepository ||
  repositoriesInstances.voucherRepository;
