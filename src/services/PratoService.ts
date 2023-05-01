import { EntityRepository, Repository, Connection, Like, SimpleConsoleLogger, Entity, getConnection, createConnection } from "typeorm";
import { Prato } from "../entity/Prato";
import {PratoRepositories} from "../repositories/PratosRepositories";
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient({
    log: ['query']
});

interface TypesPrato{
    nome:string;
    lactose:number;
    vegano:number;
    gluten:number;    
    categoria_id:number;    
}

class HandleDbPratos{
    async listaPrato({nome}){        
        const prato = await prisma.pratos.findMany({
            where:{
                nome:{
                    contains:nome
                }
            },
            include: {
                categorias: true
              }
        });        

        if(!prato || typeof(prato) == "undefined" || prato.length == 0){
            throw new Error("Prato Inexistente");
        }
        return prato;
    }

    async inserePrato({nome, lactose, vegano, gluten, categoria_id}){

        const pratoExistente = await prisma.pratos.findFirst({
            where:{
                nome:nome
            }
        });
        
        if(pratoExistente){
            throw new Error("Prato já cadastrado.");
        }
        const status = true;
        const prato = {"nome":nome,"lactose":lactose, "vegano":vegano, "gluten":gluten,"categoria_id":categoria_id, "status":status}
        
        try{
            const novoPrato = await prisma.pratos.create({ data: prato });
            return novoPrato;
          }
        catch (error) {
            console.error(error);
            throw new Error('Erro na criação do prato.');
        }

    }
    
    // Trazer todos os pratos caso não venha parametro na URL, caso venha, pegar os pratos da categoria.
    // async listaTodosOsPratos({categoria_id}){
    //     const pratoRepositorio = getCustomRepository(PratoRepositories);                
    //     if(!categoria_id){
    //         const prato = await pratoRepositorio.createQueryBuilder('pratos')
    //         .orderBy("pratos.nome","ASC")
    //         .addOrderBy("pratos.categoria_id",'ASC')
    //         .getMany();            
    //         return prato;
    //     }
    //     if(categoria_id){
    //         const prato = await pratoRepositorio.createQueryBuilder('pratos')
    //         .where('pratos.categoria_id = :id', {id: categoria_id})          
    //         .orderBy("pratos.nome","ASC")            
    //         .getMany();            
    //         return prato;
    //     }                
    //     // const pratos = await pratoRepositorio.find({categoria_id:categoria_id});            
    //     // if(!pratos[0] || pratos.length == 0){
    //     //     throw new Error("Prato Inexistente");
    //     // }
    //     // return prato;
    // }

    // async atualizaPrato({nome, lactose, vegano, gluten, categoria_id, status, id}){
    //     if(!id && !categoria_id && !status){
    //         throw new Error("Informe o Prato, Categoria ou Status");
    //     }

    //     const pratoRepositorio = getCustomRepository(PratoRepositories);
    //     const prato = await pratoRepositorio.findOne({id:id});
        
    //     if(!prato || typeof(prato) == "undefined"){
    //         throw new Error("Prato Inexistente");
    //     }

    //     if(!categoria_id){
    //         categoria_id = prato.categoria_id;
    //     }

    //     if(!nome){
    //         nome = prato.nome;
    //     }

    //     if(!lactose){
    //         lactose = prato.lactose;
    //     }

    //     if(!vegano){
    //         vegano = prato.vegano;
    //     }

    //     if(!gluten){
    //         gluten = prato.gluten;
    //     }

    //     if(typeof(status) == "undefined"){
    //         status = prato.status;         
    //     }       
    //     prato.nome = nome;
    //     prato.lactose = lactose;
    //     prato.vegano = vegano;
    //     prato.gluten = gluten;
    //     prato.categoria_id = categoria_id;
    //     prato.status = status;

    //     await pratoRepositorio.save(prato);

    //     return prato;

    // }

    // async deletaPrato({id}){
    //     if(!id){
    //         throw new Error("Informe o Prato para exclusão");
    //     }        
    //     const pratoRepositorio = getCustomRepository(PratoRepositories);
    //     if(id){              
    //         const deletaPrato = await pratoRepositorio.createQueryBuilder("Prato").delete().from(Prato)
    //         .where("id = :id",{id:id}).execute();          
    //     }
    // }

    
}

export {HandleDbPratos};