import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tests {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;
}
