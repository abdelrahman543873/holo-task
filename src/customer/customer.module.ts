import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerRepository } from './customer.repository';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './customer.entity';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [CustomerService, CustomerRepository],
})
export class CustomerModule {}
