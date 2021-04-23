import { MigrationInterface, QueryRunner } from 'typeorm';

export class MaterialTable1619182736358 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "Material"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "Material"`);
  }
}
