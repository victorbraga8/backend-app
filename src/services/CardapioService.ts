import { getCustomRepository, Like } from "typeorm";
import {CardapioRepositories} from "../repositories/CardapioRepositories";
const moment = require('moment-timezone');

class HandleDbCardapios{
    async insereCardapio(){
        const cardapioRepositorio = getCustomRepository(CardapioRepositories);        
        const cardapioDia = await cardapioRepositorio.find();
        
        if(!cardapioDia){
            throw new Error("A data de hoje já possui um cardapio cadastrado");
        }
        const dataAtual = moment().tz('America/Sao_Paulo').format('YYYY/MM/DD H:mm:ss');
        const cardapio = await cardapioRepositorio.create({data:dataAtual});
        await cardapioRepositorio.save(cardapio);
        return cardapio;
    }    
}

export {HandleDbCardapios};