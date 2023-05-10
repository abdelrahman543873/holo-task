import { CustomerRepository } from '../../src/customer/customer.repository';

export const customerTestRepo = (): CustomerRepository =>
  <CustomerRepository>global.customerRepository;
