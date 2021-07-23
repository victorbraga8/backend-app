import {Entity,PrimaryGeneratedColumn,PrimaryColumn, Column} from "typeorm";

@Entity("pratos")
class Prato {
    @PrimaryGeneratedColumn('increment')
    readonly id:number;

    @Column()
    nome:string;

    @Column()
    categoria_id:number;

    @Column()
    status:boolean;
}

export {Prato}