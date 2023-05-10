import { CustomerRepository } from '../../src/customer/customer.repository';
import { repositoriesInstances } from '../../src/shared/repositories.shared';

export const customerTestRepo = (): CustomerRepository =>
  <CustomerRepository>global.customerRepository ||
  repositoriesInstances.customerRepository;
