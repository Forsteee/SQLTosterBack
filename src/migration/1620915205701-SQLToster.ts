import {MigrationInterface, QueryRunner} from "typeorm";

export class SQLToster1620915205701 implements MigrationInterface {
    name = 'SQLToster1620915205701'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "patronymic" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "patronymic" SET NOT NULL`);
    }

}
