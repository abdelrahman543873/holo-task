import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsVoucherValid } from '../validators/redeem-voucher.validator';

export class RedeemVoucherDto {
  @IsEmail()
  email: string;

  @IsVoucherValid()
  @IsString()
  @IsNotEmpty()
  code: string;
}
