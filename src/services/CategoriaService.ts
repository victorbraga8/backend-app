import { getCustomRepository, Like } from "typeorm";
import {CategoriaRepositories} from "../repositories/CategoriasRepositories";
import {PratoRepositories} from "../repositories/PratosRepositories";

interface TypesCategoria{
    nome:string;    
}

class HandleDbCategorias{
    async insereCategoria({nome}:TypesCategoria) {
        if(!nome){
            throw new Error("Informe a Categoria");
        }
        
        const categoriaRepositorio = getCustomRepository(CategoriaRepositories);
        const categoriaExistente = await categoriaRepositorio.findOne({nome});
        
        if(categoriaExistente){
            throw new Error("Categoria já cadastrada");
        }

        const categoria = categoriaRepositorio.create({
            nome})

        await categoriaRepositorio.save(categoria);
        return categoria; 
    }
    async listaCategoria(){
        const categoriaRepositorio = getCustomRepository(CategoriaRepositories);        
        const categoria = await categoriaRepositorio.find();
        return categoria;
    }
    async atualizaCategoria({nomeCategoria, nome}){
        if(!nome){
            throw new Error("Informe a Categoria");
        }

        const categoriaRepositorio = getCustomRepository(CategoriaRepositories);
        const categoria = await categoriaRepositorio.findOne({nome:nomeCategoria});

        if(!categoria){
            throw new Error("Categoria Inexistente");
        }

        categoria.nome = nome;        
        categoriaRepositorio.save(categoria);
        return categoria;        

    }
    async deletaCategoria({nome}){
        if(!nome){
            throw new Error("Informe a Categoria para exclusão");
        
        }        
        const categoriaRepositorio = getCustomRepository(CategoriaRepositories);
        const pratoRepositorio = getCustomRepository(PratoRepositories);
        const categoria = await categoriaRepositorio.findOne({nome});        
        
        if(categoria){            
            const categoriaPratoExistente = await pratoRepositorio.findOne({categoria_id:categoria.id});            
            if(categoriaPratoExistente){
                throw new Error("Categoria possui pratos atribuidos");
            }
            await categoriaRepositorio.remove(categoria);            
        }      
        // const categoriaPratoExiste = categoriaRepositorio.find({join:{alias:"categoria", innerJoin: {id:}}})
    }
}

export {HandleDbCategorias}