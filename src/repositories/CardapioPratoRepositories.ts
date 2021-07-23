import {EntityRepository, Repository} from "typeorm"
import { CardapioPrato } from "../entity/CardapioPrato";

@EntityRepository(CardapioPrato)
class CardapioPratoRepositories extends Repository<CardapioPrato>{
    
}

export {CardapioPratoRepositories};