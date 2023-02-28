import { createConnection } from "typeorm";


createConnection();

if(createConnection()){
    console.log("Conexao executada.");
}else{
    console.log("Conexao com problemas.");
}

