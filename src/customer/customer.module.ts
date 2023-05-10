import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerRepository } from './customer.repository';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer } from './customer.entity';
import { CustomerController } from './customer.controller';

@Module({
  imports: [SequelizeModule.forFeature([Customer])],
  providers: [CustomerRepository, CustomerService],
  controllers: [CustomerController],
})
export class CustomerModule {}
