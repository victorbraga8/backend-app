import {Request, Response} from "express";
import { HandleDbCardapios } from '../services/CardapioService';
const cardapios = new HandleDbCardapios();

class HandleCardapios{
    async insereCardapio(request:Request, response:Response){
        const insereCardapio = await cardapios.insereCardapio();
        return response.json(insereCardapio);
    }
}

export{HandleCardapios};