import {EntityRepository, Repository} from "typeorm"
import { Cardapio } from "../entity/Cardapio";

@EntityRepository(Cardapio)
class CardapioRepositories extends Repository<Cardapio>{
    
}

export {CardapioRepositories};