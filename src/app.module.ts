import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users.module';
import { MaterialsModule } from './modules/materials.module';
import { TasksModule } from './modules/tasks.module';
import { TestingsModule } from './modules/testings.module';
import { TestsModule } from './modules/tests.module';
import { testingModule } from './testingapi/testing.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { AuthModule } from './auth/auth.module';
//import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    MaterialsModule,
    TasksModule,
    TestingsModule,
    TestsModule,
    AuthModule,
    //AuthenticationModule,
    /*ConfigModule.forRoot({
      validationSchema: Joi.object({
        JWT_ACCESS_TOKEN_SECRET: Joi.string().required(),
        JWT_ACCESS_TOKEN_EXPIRATION_TIME: Joi.string().required(),
        //JWT_REFRESH_TOKEN_SECRET: Joi.string().required(),
        //JWT_REFRESH_TOKEN_EXPIRATION_TIME: Joi.string().required(),
      }),
    }),*/
    testingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
