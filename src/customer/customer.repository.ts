import { Offer } from 'src/offer/offer.entity';
import { Voucher } from 'src/voucher/voucher.entity';
import { Injectable } from '@nestjs/common';
import { GetCustomerVouchersDto } from './dtos/get-customer-vouchers.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerRepository {
  constructor(
    @InjectModel(Customer)
    private readonly customer: typeof Customer,
  ) {}

  getCustomerVouchers(getCustomerVouchersDto: GetCustomerVouchersDto) {
    return this.customer.findAll({
      where: { email: getCustomerVouchersDto.email },
      include: [
        {
          model: Voucher,
          attributes: ['code'],
          include: [{ model: Offer, attributes: ['name'] }],
        },
      ],
      raw: true,
    });
  }
}
