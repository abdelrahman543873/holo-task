import { Injectable } from '@nestjs/common';
import { GetCustomerVouchersDto } from './dtos/get-customer-vouchers.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from './customer.entity';
import { Voucher } from '../voucher/voucher.entity';
import { Offer } from '../offer/offer.entity';
import { BaseRepository } from '../shared/abstract/repository.abstract';

@Injectable()
export class CustomerRepository extends BaseRepository<Customer> {
  constructor(
    @InjectModel(Customer)
    private readonly customer: typeof Customer,
  ) {
    super(customer);
  }

  getCustomerVouchers(getCustomerVouchersDto: GetCustomerVouchersDto) {
    return this.customer.findAll({
      where: { email: getCustomerVouchersDto.email },
      include: [
        {
          required: true,
          model: Voucher,
          attributes: ['code'],
          where: { usedAt: null },
          include: [{ model: Offer, attributes: ['name'] }],
        },
      ],
      raw: true,
      nest: true,
    });
  }
}
