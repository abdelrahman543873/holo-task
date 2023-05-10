import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { repositoriesInstances } from './shared/repositories.shared';
import { CustomerRepository } from './customer/customer.repository';
import { OfferRepository } from './offer/offer.repository';
import { VoucherRepository } from './voucher/voucher.repository';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  const options = new DocumentBuilder()
    .setTitle('🚀holo task')
    .setDescription('holo task description')
    .setVersion('1.0')
    .addTag('customer', 'customer endpoints')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      stopAtFirstError: true,
      forbidNonWhitelisted: false,
      validateCustomDecorators: true,
    }),
  );
  repositoriesInstances.customerRepository = app.get(CustomerRepository);
  repositoriesInstances.offerRepository = app.get(OfferRepository);
  repositoriesInstances.voucherRepository = app.get(VoucherRepository);
  await app.listen(3000);
}
bootstrap();
