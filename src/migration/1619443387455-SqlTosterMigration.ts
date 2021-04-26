import {MigrationInterface, QueryRunner} from "typeorm";

export class SqlTosterMigration1619443387455 implements MigrationInterface {
    name = 'SqlTosterMigration1619443387455'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "material" ("id" SERIAL NOT NULL, "file" json, CONSTRAINT "PK_0343d0d577f3effc2054cbaca7f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "surname" character varying NOT NULL, "patronymic" character varying NOT NULL, "mail" character varying NOT NULL, "password" character varying NOT NULL, "isAdmin" boolean NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "testing" ("id" SERIAL NOT NULL, "marker" integer NOT NULL, "userId" integer, "testId" integer, CONSTRAINT "PK_d380da037e5aa1b6a5fd58c5b7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "test" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "level" character varying NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_5417af0062cf987495b611b59c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "task" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "number" integer NOT NULL, "description" character varying NOT NULL, "standard" character varying NOT NULL, "recommendation" character varying NOT NULL, "testId" integer, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "testing" ADD CONSTRAINT "FK_e70b0890ca73f29918a1f64a402" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "testing" ADD CONSTRAINT "FK_6f92e21039933b274b54b1fcce3" FOREIGN KEY ("testId") REFERENCES "test"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_aeafcad779cd6d5c0d8f6ca0144" FOREIGN KEY ("testId") REFERENCES "test"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "FK_aeafcad779cd6d5c0d8f6ca0144"`);
        await queryRunner.query(`ALTER TABLE "testing" DROP CONSTRAINT "FK_6f92e21039933b274b54b1fcce3"`);
        await queryRunner.query(`ALTER TABLE "testing" DROP CONSTRAINT "FK_e70b0890ca73f29918a1f64a402"`);
        await queryRunner.query(`DROP TABLE "task"`);
        await queryRunner.query(`DROP TABLE "test"`);
        await queryRunner.query(`DROP TABLE "testing"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "material"`);
    }

}
