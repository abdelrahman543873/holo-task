import { faker } from '@faker-js/faker';
import { Customer } from '../../src/customer/customer.entity';
import { customerTestRepo } from './customer.test-repo';

interface ICustomer {
  name?: string;
  email?: string;
}
export const buildCustomerParams = (obj: ICustomer = {}): ICustomer => {
  return {
    email: obj.email || faker.internet.email(),
    name: obj.name || faker.internet.userName(),
  };
};

export const customerFactory = (obj: ICustomer = {}): Promise<Customer> => {
  const params: ICustomer = buildCustomerParams(obj);
  return customerTestRepo().create(params);
};
