import {EntityRepository, Repository} from "typeorm"
import { Usuario } from "../entity/Usuario";

@EntityRepository(Usuario)
class UserRepositories extends Repository<Usuario>{
    
}

export {UserRepositories};