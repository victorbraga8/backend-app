import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class InsereCategoria1626905684974 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"categorias",
                columns:[
                    {
                        name:'id',
                        type:'int',
                        isPrimary:true,
                        isGenerated:true,
                        generationStrategy:"increment"
                    }, 
                    {
                        name:'nome',
                        type:'varchar',
                        isNullable:false,                                                
                    }
                ],                
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categorias")
    }

}
