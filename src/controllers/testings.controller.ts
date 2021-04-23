import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TestingsService } from '../services/testings.service';
import { Testing } from '../entities/testings.entity';
import { UpdateTestingDto } from '../dto/update-testing.dto';
import { CreateTestingDto } from '../dto/create-testing.dto';

@Controller('testing')
export class TestingsController {
  constructor(private readonly testingService: TestingsService) {}
  @Get()
  getAll(): Promise<Testing[]> {
    return this.testingService.findAll();
  }
  @Get(':id')
  getOne(@Param('id') id: number): Promise<Testing> {
    return this.testingService.findOne(id);
  }
  @Post()
  create(@Body() createTestingDto: CreateTestingDto): Testing {
    return this.testingService.create(createTestingDto);
  }
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.testingService.remove(id);
  }
  @Put('id')
  update(
    @Param('id') id: number,
    @Body() updateTestingDto: UpdateTestingDto,
  ): Promise<Testing> {
    return this.testingService.update(id, updateTestingDto);
  }
}
