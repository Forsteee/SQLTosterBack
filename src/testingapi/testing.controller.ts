import { Body, Controller, Post } from '@nestjs/common';
import { testingService } from './testing.service';

@Controller('testingapi')
export class testingController {
  constructor(private readonly testingService: testingService) {}
  @Post('')
  testing(@Body() request: string): any {
    return this.testingService.testing(request);
  }
}
