"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var PratosController_1 = require("./controllers/PratosController");
var CategoriasController_1 = require("./controllers/CategoriasController");
var CardapiosController_1 = require("./controllers/CardapiosController");
var CardapioPratoController_1 = require("./controllers/CardapioPratoController");
var router = express_1.Router();
exports.router = router;
// const createUserController = new CreateUserController();
var HandlePratosController = new PratosController_1.HandlePratos();
var HandleCategoriasController = new CategoriasController_1.HandleCategorias();
var HandleCardapiosController = new CardapiosController_1.HandleCardapios();
var HandleCardapioPratoController = new CardapioPratoController_1.HandleCardapioPrato();
// router.post("/users", createUserController.handle)
router.get("/", function (req, res) { res.json({ "mensagem": "Rota Base Atualizada - PM2" }); });
router.post("/prato", HandlePratosController.inserePrato);
router.get("/listaprato/:nome?", HandlePratosController.listaPrato);
router.get("/listatodosospratos/:nome?/:categoria_id?/:status?", HandlePratosController.listaTodosOsPratos);
router.put("/atualizaprato", HandlePratosController.atualizaPrato);
router.delete("/deletaprato/:nome?", HandlePratosController.deletaPrato);
router.post("/categoria", HandleCategoriasController.insereCategoria);
router.get("/categoria/:nome?", HandleCategoriasController.listaCategoria);
router.put("/categoria", HandleCategoriasController.atualizaCategoria);
router.delete("/deletacategoria/:nome?", HandleCategoriasController.deletaCategoria);
router.post("/cardapios", HandleCardapiosController.insereCardapio);
router.post("/cardapioprato", HandleCardapioPratoController.insereCardapioPrato);
router.get("/cardapiodia", HandleCardapioPratoController.listaCardapioDia);
router.delete("/deletapratocardapio", HandleCardapioPratoController.deletaPratoCardapio);
//# sourceMappingURL=routes.js.map