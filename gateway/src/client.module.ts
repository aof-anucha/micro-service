import { Global, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Global()
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PAYMENT_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 3001,
        },
      },
      {
        name: 'ORDER_SERVICE',
        transport: Transport.TCP,
        options: { port: 3002 },
      },
      {
        name: 'CART_SERVICE',
        transport: Transport.TCP,
        options: { port: 3003 },
      },
      {
        name: 'USER_SERVICE',
        transport: Transport.TCP,
        options: { port: 3004 },
      },
      {
        name: 'PRODUCT_SERVICE',
        transport: Transport.TCP,
        options: { port: 3005 },
      }
    ]),
  ],
  exports: [ClientsModule],
})
export class GlobalClientModule {}