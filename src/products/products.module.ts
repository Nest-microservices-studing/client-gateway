import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, PRODUCT_SERVICE } from 'src/config';
import { OrdersModule } from 'src/orders/orders.module';

@Module({
  controllers: [ProductsController],
  providers: [],
  imports: [
    ClientsModule.register([
      { 
        name: PRODUCT_SERVICE, 
        transport: Transport.TCP,
        options: {
          host: envs.productsMicroservice.host,  
          port: envs.productsMicroservice.port  
        }
      },
    ]),
  ]
})
export class ProductsModule {}
