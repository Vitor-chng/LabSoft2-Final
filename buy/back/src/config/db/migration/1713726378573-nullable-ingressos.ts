import { MigrationInterface, QueryRunner } from "typeorm";

export class NullableIngressos1713726378573 implements MigrationInterface {
    name = 'NullableIngressos1713726378573'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ingresso" ALTER COLUMN "assento" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ingresso" ALTER COLUMN "assento" SET NOT NULL`);
    }

}
