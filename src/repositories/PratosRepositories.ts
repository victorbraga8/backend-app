import {EntityRepository, Repository} from "typeorm"
import { Prato } from "../entity/Prato";

@EntityRepository(Prato)
class PratoRepositories extends Repository<Prato>{
    
}

export {PratoRepositories};