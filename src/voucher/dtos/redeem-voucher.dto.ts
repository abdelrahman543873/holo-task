import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsVoucherValid } from '../validators/redeem-voucher.validator';
import { Transform } from 'class-transformer';

export class RedeemVoucherDto {
  @IsEmail()
  @Transform((value) => value.value.toLowerCase())
  email: string;

  @IsVoucherValid()
  @IsString()
  @IsNotEmpty()
  code: string;
}
