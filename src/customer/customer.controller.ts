import { Controller, Get, Query } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { GetCustomerVouchersDto } from './dtos/get-customer-vouchers.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('customer')
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get('vouchers')
  async getCustomerVouchers(
    @Query() getCustomerVouchersDto: GetCustomerVouchersDto,
  ) {
    return await this.customerService.getCustomerVouchers(
      getCustomerVouchersDto,
    );
  }
}
