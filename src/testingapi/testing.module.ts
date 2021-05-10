import { Module } from '@nestjs/common';
import { testingController } from './testing.controller';
import { testingService } from './testing.service';

@Module({
  imports: [],
  controllers: [testingController],
  providers: [testingService],
})
export class testingModule {}
