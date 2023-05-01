import { EntityRepository, Repository } from 'typeorm';
import { Prato } from "../entity/Prato";

@EntityRepository(Prato)
export class PratoRepositories extends Repository<Prato>{
    
}
