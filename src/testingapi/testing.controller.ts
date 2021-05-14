import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { testingService } from './testing.service';
import { requestDto } from '../dto/request.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('testingapi')
export class testingController {
  constructor(private readonly testingService: testingService) {}
  @UseGuards(JwtAuthGuard)
  @Post('')
  testing(@Body() request: requestDto): any {
    return this.testingService.testing(request);
  }
}
