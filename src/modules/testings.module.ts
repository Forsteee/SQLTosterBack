import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Testing } from '../entities/testings.entity';
import { TestingsController } from '../controllers/testings.controller';
import { TestingsService } from '../services/testings.service';

@Module({
  imports: [TypeOrmModule.forFeature([Testing])],
  controllers: [TestingsController],
  providers: [TestingsService],
})
export class TestingsModule {}
