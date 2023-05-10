import { IsNotEmpty, IsString } from 'class-validator';

export class GetCustomerVouchersDto {
  @IsString()
  @IsNotEmpty()
  email: string;
}
