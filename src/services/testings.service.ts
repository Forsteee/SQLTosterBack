import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Testing } from '../entities/testings.entity';
import { CreateTestingDto } from '../dto/create-testing.dto';
import { UpdateTestingDto } from '../dto/update-testing.dto';
import { User } from '../entities/users.entity';
import { Test } from '../entities/tests.entity';

@Injectable()
export class TestingsService {
  constructor(
    @InjectRepository(Testing)
    private testingsRepository: Repository<Testing>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Test)
    private testsRepository: Repository<Test>,
  ) {}
  findAll(): Promise<Testing[]> {
    return this.testingsRepository.find();
  }
  findAllFromUsers(idUser: number): Promise<Testing[]> {
    return this.testingsRepository.find({
      where: { user: idUser },
    });
  }

  findOne(id: number): Promise<Testing> {
    return this.testingsRepository.findOne(id);
  }

  async create(testingDto: CreateTestingDto) {
    if (
      !(await this.testingsRepository.findOne({
        user: testingDto.userId,
        test: testingDto.testId,
      }))
    ) {
      return await this.testingsRepository.save({
        user: testingDto.userId,
        test: testingDto.testId,
        marker: 1,
        finished: false,
      });
    } else {
      return null;
    }
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
