import {Entity,PrimaryGeneratedColumn,PrimaryColumn, Column} from "typeorm";

@Entity("cardapioPrato")
class CardapioPrato {
    @PrimaryGeneratedColumn('increment')
    readonly id:number;

    @Column()
    prato_id:number;

    @Column()
    cardapio_id:number;
}

export {CardapioPrato}