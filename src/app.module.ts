import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModulesModule } from './modules/modules.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ModulesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
