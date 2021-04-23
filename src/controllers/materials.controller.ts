import { Controller, Delete, Get, Param } from '@nestjs/common';
import { Material } from '../entities/materials.entity';
import { MaterialsService } from '../services/materials.service';

@Controller('materials')
export class MaterialsController {
  constructor(private readonly materialService: MaterialsService) {}
  @Get()
  getAll(): Promise<Material[]> {
    return this.materialService.findAll();
  }
  @Get(':id')
  getOne(@Param('id') id: number): Promise<Material> {
    return this.materialService.findOne(id);
  }
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.materialService.remove(id);
  }
}
