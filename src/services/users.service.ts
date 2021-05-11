import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { SearchUserDto } from '../dto/search-user.dto';
import * as bcrypt from 'bcrypt';
import { response } from 'express';
import { exhaustiveTypeException } from 'tsconfig-paths/lib/try-path';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }
  async findOneUAuth(userDto: SearchUserDto): Promise<User | undefined> {
    return this.usersRepository.findOne({ login: userDto.login });
  }

  getById(userId: number): Promise<User | undefined> {
    return this.usersRepository.findOne(userId);
  }

  async create(userDto: CreateUserDto) {
    //if (!this.usersRepository.findOne({ login: userDto.login })) {
    //const newUser = new User();
    if (await this.usersRepository.findOne({ login: userDto.login })) {
      return null;
    } else {
      const hashedPassword = await bcrypt.hash(userDto.password, 10);
      const user = await this.usersRepository.save({
        ...userDto,
        password: hashedPassword,
      });
      user.password = undefined;
      return user;
    }
    /*newUser.login = userDto.login;
    newUser.name = userDto.name;
    newUser.mail = userDto.mail;
    newUser.password = userDto.password;
    newUser.patronymic = userDto.patronymic;
    newUser.surname = userDto.surname;
    newUser.isAdmin = userDto.isAdmin;
    return this.usersRepository.save(newUser);*/
    //}
  }

  async update(id: number, userDto: UpdateUserDto) {
    const user = await this.usersRepository.findOne(id);
    this.usersRepository.merge(user, userDto);
    return this.usersRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
