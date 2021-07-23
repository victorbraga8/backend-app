import {Request, Response} from "express";
import { HandleDbPratos } from '../services/PratoService';
const pratos = new HandleDbPratos();

class HandlePratos{
    async inserePrato(request:Request, response:Response){
        const {nome, categoria_id, status} = request.body;
                
        const inserePrato = await pratos.inserePrato({nome, categoria_id, status});

        return response.json(inserePrato);
        
    }

    async listaPrato(request:Request, response:Response){
        const {nome} = request.params;
                
        const listaPrato = await pratos.listaPrato({nome});

        return response.json(listaPrato);
    }

    async listaTodosOsPratos(request:Request, response:Response){
        const {nome, categoria_id, status} = request.params;
                
        const listaPrato = await pratos.listaTodosOsPratos({nome, categoria_id, status});

        return response.json(listaPrato);
    }

    async atualizaPrato(request:Request, response:Response){
        const {nome, categoria_id, status, nomePrato} = request.body;
        
        const atualizaPrato = await pratos.atualizaPrato({nome, categoria_id, status, nomePrato});

        return response.json(atualizaPrato);
    }

    async deletaPrato(request:Request, response:Response){
        const {nome} = request.params;
        
        const deletaPrato = await pratos.deletaPrato({nome});

        return response.json({"return":"Prato Excluído: "+nome});
    }
}

export {HandlePratos};