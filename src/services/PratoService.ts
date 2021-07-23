import { getCustomRepository, Like } from "typeorm";
import {PratoRepositories} from "../repositories/PratosRepositories";

interface TypesPrato{
    nome:string;
    categoria_id:number;
    status: boolean;
}

class HandleDbPratos{
    async inserePrato({nome, categoria_id, status}:TypesPrato){
        const pratoRepositorio = getCustomRepository(PratoRepositories);
        const pratoExistente = await pratoRepositorio.findOne({nome});

        if(!nome){
            throw new Error("Informe o Prato");
        }

        if(pratoExistente){
            throw new Error("Prato já cadastrado");
        }

        const prato = pratoRepositorio.create({
            nome, categoria_id, status
        })

        await pratoRepositorio.save(prato);
        return prato; 
    }  
    
    async listaPrato({nome}){
        if(!nome){
            throw new Error("Informe o Prato");
        }

        const pratoRepositorio = getCustomRepository(PratoRepositories);
        const prato = await pratoRepositorio.findOne({nome});
        
        if(!prato || typeof(prato) == "undefined"){
            throw new Error("Prato Inexistente");
        }
        return prato;
    }
    
    async listaTodosOsPratos({nome,categoria_id,status}){
        if(!nome && !categoria_id && !status){
            throw new Error("Informe o Prato, Categoria ou Status");
        }

        const pratoRepositorio = getCustomRepository(PratoRepositories);
        const prato = await pratoRepositorio.find({nome: Like("%"+nome+"%")});
        
        if(!prato || prato.length == 0){
            throw new Error("Prato Inexistente");
        }
        return prato;
    }

    async atualizaPrato({nome, categoria_id, status, nomePrato}){
        if(!nome && !categoria_id && !status){
            throw new Error("Informe o Prato, Categoria ou Status");
        }

        const pratoRepositorio = getCustomRepository(PratoRepositories);
        const prato = await pratoRepositorio.findOne({nome:nomePrato});
        

        if(!prato || typeof(prato) == "undefined"){
            throw new Error("Prato Inexistente");
        }

        if(!categoria_id){
            categoria_id = prato.categoria_id;
        }

        if(!nome){
            nome = prato.nome;
        }

        if(!status){
            status = prato.status;
        }

        prato.nome = nome;
        prato.categoria_id = categoria_id;
        prato.status = status;

        await pratoRepositorio.save(prato);

        return prato;

    }

    async deletaPrato({nome}){
        if(!nome){
            throw new Error("Informe o Prato para exclusão");
        }

        const pratoRepositorio = getCustomRepository(PratoRepositories);
        if(nome){
            const prato = await pratoRepositorio.findOne({nome:nome});
            await pratoRepositorio.remove(prato);            
        }
    }

    
}

export {HandleDbPratos};