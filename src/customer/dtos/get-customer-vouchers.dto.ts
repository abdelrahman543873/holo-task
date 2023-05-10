import { IsEmail } from 'class-validator';

export class GetCustomerVouchersDto {
  @IsEmail()
  email: string;
}
