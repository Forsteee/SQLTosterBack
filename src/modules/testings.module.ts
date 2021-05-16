import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Testing } from '../entities/testings.entity';
import { TestingsController } from '../controllers/testings.controller';
import { TestingsService } from '../services/testings.service';
import { Test } from '../entities/tests.entity';
import { User } from '../entities/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Testing, Test, User])],
  controllers: [TestingsController],
  providers: [TestingsService],
})
export class TestingsModule {}
