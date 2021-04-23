import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users.module';
import { MaterialsModule } from './modules/materials.module';
import { TasksModule } from './modules/tasks.module';
import { TestingsModule } from './modules/testings.module';
import { TestsModule } from './modules/tests.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    MaterialsModule,
    TasksModule,
    TestingsModule,
    TestsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
