import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { VoucherRepository } from '../voucher.repository';

@ValidatorConstraint({ name: 'RedeemVoucherValidator', async: true })
@Injectable()
export class RedeemVoucherValidator implements ValidatorConstraintInterface {
  constructor(private readonly voucherRepository: VoucherRepository) {}
  async validate(
    code: string,
    validationArguments: ValidationArguments,
  ): Promise<boolean> {
    const voucher = await this.voucherRepository.validateVoucherIsValid(
      code,
      validationArguments.object['email'],
    );
    if (!voucher) return false;
    return true;
  }

  defaultMessage() {
    return 'this voucher code is invalid';
  }
}
export function IsVoucherValid(validationOptions?: ValidationOptions) {
  return function (object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: RedeemVoucherValidator,
    });
  };
}
