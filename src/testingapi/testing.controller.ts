import { Body, Controller, Post } from '@nestjs/common';
import { testingService } from './testing.service';
import { requestDto } from '../dto/request.dto';

@Controller('testingapi')
export class testingController {
  constructor(private readonly testingService: testingService) {}
  @Post('')
  testing(@Body() request: requestDto): any {
    return this.testingService.testing(request);
  }
}
