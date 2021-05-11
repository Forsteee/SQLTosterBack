import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Testing } from './testings.entity';

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

  @Column()
  patronymic: string;

  @Column()
  mail: string;

  @Column()
  password: string;

  @Column()
  isAdmin: boolean;

  @Column()
  isTwoFactorAuthenticationEnabled: boolean;

  @OneToMany(() => Testing, (testing) => testing.user)
  testings: Testing[];
}
