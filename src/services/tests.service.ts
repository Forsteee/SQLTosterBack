import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Test } from '../entities/tests.entity';

@Injectable()
export class TestsService {
  constructor(
    @InjectRepository(Test)
    private testsRepository: Repository<Test>,
  ) {}
  findAll(): Promise<Test[]> {
    return this.testsRepository.find();
  }

  findOne(id: number): Promise<Test> {
    return this.testsRepository.findOne(id);
  }
}
