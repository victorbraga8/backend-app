import {Entity,PrimaryGeneratedColumn,PrimaryColumn, Column} from "typeorm";

@Entity("categorias")
class Categoria {
    @PrimaryGeneratedColumn('increment')
    readonly id:number;

    @Column()
    nome:string;

}

export {Categoria}