import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class InserePratos1626817159287 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"pratos",
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
                    },
                    {
                        name:'categoria_id',
                        type: 'int',                                              
                    },{
                        name:'status',
                        type:'boolean',
                        isNullable:false,
                    }
                ],
                foreignKeys:[{
                    name:"FKCategoriaID",
                    referencedTableName:"categorias",
                    referencedColumnNames:["id"],
                    columnNames:["categoria_id"]
                }]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usuarios")
    }

}
