"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
(0, typeorm_1.createConnection)();
if ((0, typeorm_1.createConnection)()) {
    console.log("Conexao executada.");
}
else {
    console.log("Conexao com problemas.");
}
//# sourceMappingURL=index.js.map