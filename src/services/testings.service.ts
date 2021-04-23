import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Testing } from '../entities/testings.entity';
import { CreateTestingDto } from '../dto/create-testing.dto';
import { UpdateTestingDto } from '../dto/update-testing.dto';

@Injectable()
export class TestingsService {
  constructor(
    @InjectRepository(Testing)
    private testingsRepository: Repository<Testing>,
  ) {}
  findAll(): Promise<Testing[]> {
    return this.testingsRepository.find();
  }

  findOne(id: number): Promise<Testing> {
    return this.testingsRepository.findOne(id);
  }

  create(testingDto: CreateTestingDto) {
    const newTesting = new Testing();
    newTesting.user = testingDto.user;
    newTesting.test = testingDto.test;
    newTesting.marker = testingDto.marker;
    return this.testingsRepository.create(newTesting);
  }

  async update(id: number, testingDto: UpdateTestingDto) {
    const user = await this.testingsRepository.findOne(id);
    this.testingsRepository.merge(user, testingDto);
    return this.testingsRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    await this.testingsRepository.delete(id);
  }
}
