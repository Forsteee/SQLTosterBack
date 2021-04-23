import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { JSONFile } from '@nestjs/schematics/dist/utils/json-file.util';

@Entity()
export class Material {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  file: string;
}
