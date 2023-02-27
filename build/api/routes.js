"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var PratosController_1 = require("../controllers/PratosController");
var CategoriasController_1 = require("../controllers/CategoriasController");
var CardapiosController_1 = require("../controllers/CardapiosController");
var CardapioPratoController_1 = require("../controllers/CardapioPratoController");
var router = express_1.Router();
exports.router = router;
// const createUserController = new CreateUserController();
var HandlePratosController = new PratosController_1.HandlePratos();
var HandleCategoriesController = new CategoriasController_1.HandleCategorias();
var HandleCardapiosController = new CardapiosController_1.HandleCardapios();
var HandleCardapioPratoController = new CardapioPratoController_1.HandleCardapioPrato();
// router.post("/users", createUserController.handle)
router.post("/prato", HandlePratosController.inserePrato);
router.get("/listaprato/:nome?", HandlePratosController.listaPrato);
router.get("/listatodosospratos/:categoria_id?", HandlePratosController.listaTodosOsPratos);
router.put("/atualizaprato", HandlePratosController.atualizaPrato);
router.delete("/deletaprato/:id?", HandlePratosController.deletaPrato);
router.post("/categoria", HandleCategoriesController.insereCategoria);
router.get("/categoria/:id?", HandleCategoriesController.listaCategoria);
router.get("/categoriapratos/:id?", HandleCategoriesController.listaCategoriaPratos);
router.put("/categoria", HandleCategoriesController.atualizaCategoria);
router.delete("/deletacategoria/:id", HandleCategoriesController.deletaCategoria);
router.post("/cardapios", HandleCardapiosController.insereCardapio);
router.post("/cardapioprato", HandleCardapioPratoController.insereCardapioPrato);
router.get("/cardapiodia", HandleCardapioPratoController.listaCardapioDia);
router.delete("/deletacardapio/:id", HandleCardapiosController.deletaCardapio);
router.delete("/deletapratocardapio/:cardapio_id", HandleCardapioPratoController.deletaPratoCardapio);
router.put("/atualizacardapio/:id", HandleCardapiosController.atualizaCardapio);
//# sourceMappingURL=routes.js.map