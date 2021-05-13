import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './users.entity';
import { Test } from './tests.entity';

@Entity()
export class Testing {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.testings)
  user: User;

  @ManyToOne(() => Test, (test) => test.testings)
  test: Test;

  @Column()
  marker: number;

  @Column()
  finished: boolean;
}
