import {Entity,PrimaryGeneratedColumn,PrimaryColumn, Column, OneToMany, OneToOne, JoinColumn, ManyToOne} from "typeorm";
import { Prato } from "./Prato";
import { Cardapio } from "./Cardapio";

@Entity("cardapioPrato")
class CardapioPrato {
    @PrimaryGeneratedColumn('increment')
    readonly id:number;

    @Column('int')
    prato_id:number;

    @Column('int')
    cardapio_id:number;


}

export {CardapioPrato}




