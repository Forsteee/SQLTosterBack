import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { testingService } from './testing.service';
import { requestDto } from '../dto/request.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RegstandartDto } from '../dto/regstandart.dto';

@Controller('testingapi')
export class testingController {
  constructor(private readonly testingService: testingService) {}
  //@UseGuards(JwtAuthGuard)
  @Post('/eqPercent')
  getEqPercent(@Body() request: RegstandartDto): any {
    return this.testingService.getEqPercent(request);
  }
  @Post('/req')
  getResponse(@Body() request: requestDto): any {
    return this.testingService.getRes(request);
  }
}
