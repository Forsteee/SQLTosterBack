import { Controller, Get, Param } from '@nestjs/common';
import { TestsService } from '../services/tests.service';
import { Test } from '../entities/tests.entity';

@Controller('tests')
export class TestsController {
  constructor(private readonly testsService: TestsService) {}
  @Get()
  getAll(): Promise<Test[]> {
    return this.testsService.findAll();
  }
  @Get(':id')
  getOne(@Param('id') id: number): Promise<Test> {
    return this.testsService.findOne(id);
  }
}
