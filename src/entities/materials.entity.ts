import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Material {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  chapter: number;

  @Column({ type: 'json', nullable: true })
  file: any;
}
