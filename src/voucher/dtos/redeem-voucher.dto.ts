import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RedeemVoucherDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  code: string;
}
