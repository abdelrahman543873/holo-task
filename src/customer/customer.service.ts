import { Injectable } from '@nestjs/common';
import { CustomerRepository } from './customer.repository';
import { GetCustomerVouchersDto } from './dtos/get-customer-vouchers.dto';

@Injectable()
export class CustomerService {
  constructor(private readonly customerRepository: CustomerRepository) {}
  getCustomerVouchers(getCustomerVouchersDto: GetCustomerVouchersDto) {
    return this.customerRepository.getCustomerVouchers(getCustomerVouchersDto);
  }
}
