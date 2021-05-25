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

  @Column({ nullable: true })
  formulation: string;

  @Column({ nullable: true })
  standard: string;

  @Column()
  recommendation: string;

  @Column({ type: 'json', nullable: true, array: false })
  answer: any;

  @ManyToOne(() => Test, (test) => test.tasks)
  test: Test;
}
