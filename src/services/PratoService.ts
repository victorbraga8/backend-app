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