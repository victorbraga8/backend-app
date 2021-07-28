import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class InsereCardapio1626906360641 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"cardapio",
                columns:[
                    {
                        name:'id',
                        type:'int',
                        isPrimary:true,
                        isGenerated:true,                        
                        generationStrategy:"increment"
                    }, 
                    {
                        name:'data',
                        type:'timestamp',
                        default:"now()",                        
                    },
                    {
                        name:'updated_at',
                        type:'timestamp',
                        default:"now()",                        
                    }
                ]                
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cardapio")
    }

}
