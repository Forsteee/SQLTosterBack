import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Task } from './tasks.entity';
import { Testing } from './testings.entity';

@Entity()
export class Test {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  level: string;

  @Column()
  type: string;

  @OneToMany(() => Task, (task) => task.test)
  tasks: Task[];

  @OneToMany(() => Testing, (testing) => testing.test)
  testings: Testing[];
}