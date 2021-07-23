import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class InsereCardapioPrato1626906548783 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"cardapioPrato",
                columns:[
                    {
                        name:'id',
                        type:'int',
                        isPrimary:true,
                        isGenerated:true,
                    }, 
                    {
                        name:'prato_id',
                        type:'int',                        
                    }, 
                    {
                        name:'cardapio_id',
                        type:'int',                        
                    }
                ], 
                foreignKeys:[{
                    name:"FKPratoID",
                    referencedTableName:"pratos",
                    referencedColumnNames:["id"],
                    columnNames:["prato_id"],                    
                },{
                    name:"FKCardapioID",
                    referencedTableName:"cardapio",
                    referencedColumnNames:["id"],
                    columnNames:["cardapio_id"],                    
                }
            ]               
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
