import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Test } from '../entities/tests.entity';
import { TestsController } from '../controllers/tests.controller';
import { TestsService } from '../services/tests.service';

@Module({
  imports: [TypeOrmModule.forFeature([Test])],
  controllers: [TestsController],
  providers: [TestsService],
})
export class TestsModule {}
