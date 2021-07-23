import {Request, Response} from "express";
import { HandleDbCategorias } from '../services/CategoriaService';
const categorias = new HandleDbCategorias();

class HandleCategorias{
    async insereCategoria(request:Request, response:Response){
        const {nome} = request.body;
                
        const insereCategoria = await categorias.insereCategoria({nome});

        return response.json(insereCategoria);
        
    }

    async listaCategoria(request:Request, response:Response){
        // const {nome} = request.params;
                
        const listaCategoria = await categorias.listaCategoria();

        return response.json(listaCategoria);
    }

    async atualizaCategoria(request:Request, response:Response){
        const {nomeCategoria, nome} = request.body;
        const atualizaCategoria = await categorias.atualizaCategoria({nomeCategoria, nome})
        return response.json(atualizaCategoria);
    }

    async deletaCategoria(request:Request, response:Response){
        const {nome} = request.params;
        const deletaCategoria = await categorias.deletaCategoria({nome});
        return response.json({"return":"Categoria Excluída: "+nome});
    }
}

export {HandleCategorias};