import {Entity,PrimaryGeneratedColumn,PrimaryColumn, Column} from "typeorm";

@Entity("cardapio")
class Cardapio {
    @PrimaryGeneratedColumn('increment')
    readonly id:number;

    @Column()
    data:string;
    updated_at: Date;

}

export {Cardapio}