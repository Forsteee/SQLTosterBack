import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Material } from '../entities/materials.entity';
import { MaterialsController } from '../controllers/materials.controller';
import { MaterialsService } from '../services/materials.service';

@Module({
  imports: [TypeOrmModule.forFeature([Material])],
  controllers: [MaterialsController],
  providers: [MaterialsService],
})
export class MaterialsModule {}
