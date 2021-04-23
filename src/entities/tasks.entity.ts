import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Test } from './tests.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  number: number;

  @Column()
  description: string;

  @Column()
  standard: string;

  @Column()
  recommendation: string;

  @ManyToOne(() => Test, (test) => test.tasks)
  test: Test;
}
