import { Module } from '@nestjs/common';
import { testingController } from './testing.controller';
import { testingService } from './testing.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from '../entities/tasks.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [testingController],
  providers: [testingService],
})
export class testingModule {}
