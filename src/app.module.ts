import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { ProductsController } from './products/products.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm';
import { UsersModule } from './users/users.module';
import { PhotosModule } from './photos/photos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'KaktusKaktus',
      database: 'nest-db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], 
      synchronize: false
    }),
    ProductsModule,
    UsersModule,
    PhotosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {
    // console.log('connection status ', connection.isConnected )
  }
  // configure(consumer: MiddlewareConsumer){
    // consumer
    // .apply(LoggerMiddleware)
    // .forRoutes(ProductsController)
    // consumer
    // .apply(LoggerMiddleware)
    // .forRoutes({ path: 'products', method: RequestMethod.GET })
    // consumer
    // .apply(LoggerMiddleware)
    // .exclude({ path: 'products', method: RequestMethod.GET })
    // .forRoutes(ProductsController)
  // }
}
