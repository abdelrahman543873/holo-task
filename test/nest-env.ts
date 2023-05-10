import { TestingModule } from '@nestjs/testing';
import NodeEnvironment from 'jest-environment-node';
import { CustomerRepository } from '../src/customer/customer.repository';
import { OfferRepository } from '../src/offer/offer.repository';
import { VoucherRepository } from '../src/voucher/voucher.repository';

class NestEnvironment extends NodeEnvironment {
  constructor(config, context) {
    super(config, context);
  }

  async setup() {
    await super.setup();
    this.global.appContext = global.app;
    const app: TestingModule = <TestingModule>this.global.appContext;
    this.global.customerRepository =
      app.get<CustomerRepository>(CustomerRepository);
    this.global.offerRepository = app.get<OfferRepository>(OfferRepository);
    this.global.voucherRepository =
      app.get<VoucherRepository>(VoucherRepository);
  }

  async teardown() {
    await super.teardown();
  }

  getVmContext() {
    return super.getVmContext();
  }
}

export default NestEnvironment;
