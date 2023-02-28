import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
// import {v4 as uuid} from 'uuid';

@Entity("usuarios")
class Usuario {
    @PrimaryColumn('int')
    readonly id:string;

    @Column('text')
    name:string;
    
    @Column('text')
    email:string;
    
    @Column('boolean')
    admin: boolean;

    @CreateDateColumn('date')
    created_at:Date;

    @UpdateDateColumn('date')
    updated_at: Date;

    // constructor(){
    //     if(!this.id){
    //         this.id = uuid();
    //     }
    // }
}

export {Usuario};