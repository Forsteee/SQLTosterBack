import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Testing } from './testings.entity';
import {isUndefined} from "@nestjs/common/utils/shared.utils";
import {isDefined} from "class-validator";
import any = jasmine.any;

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  login: string;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column({ nullable: true })
  patronymic: string;

  @Column()
  mail: string;

  @Column()
  password: string;

  @Column()
  isAdmin: boolean;

  @OneToMany(() => Testing, (testing) => testing.user)
  testings: Testing[];
}
