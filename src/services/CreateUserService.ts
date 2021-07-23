import { getCustomRepository } from "typeorm";
import {UserRepositories} from "../repositories/UsersRepositories";

interface IUserRequest{
    name:string;
    email:string;
    admin?: boolean;
}

class CreateUserService{
    async execute({name, email, admin}:IUserRequest){        
        const userRepositories = getCustomRepository(UserRepositories);
        const usuarioExistente = await userRepositories.findOne({email});
        
        if(!email){
            throw new Error("E-mail incorreto");
        }
        
        if(usuarioExistente){
            throw new Error("E-mail Existente");
            // const user = {
            //     "message":"E-mail já cadastrado"
            // };
            // return user;
        }

        const user = userRepositories.create({
            name,
            email,
            admin
        })

        await userRepositories.save(user);
        return user;
    }
}

export {CreateUserService};