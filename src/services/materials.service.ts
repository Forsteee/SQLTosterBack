import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Material } from '../entities/materials.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MaterialsService {
  constructor(
    @InjectRepository(Material)
    private materialsRepository: Repository<Material>,
  ) {}

  findAll(): Promise<Material[]> {
    return this.materialsRepository.find({
      order: {
        chapter: 'ASC',
      },
    });
  }

  findOne(id: number): Promise<Material> {
    return this.materialsRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.materialsRepository.delete(id);
  }
}
