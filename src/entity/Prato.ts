import {Entity,PrimaryGeneratedColumn,PrimaryColumn, Column,ManyToMany,JoinTable} from "typeorm";
import { Cardapio } from "./Cardapio";

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

    @ManyToMany(() => Cardapio, cardapio => cardapio.id)
    cardapios: Cardapio[];
}

export {Prato}