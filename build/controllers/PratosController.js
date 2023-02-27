"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandlePratos = void 0;
var PratoService_1 = require("../services/PratoService");
var pratos = new PratoService_1.HandleDbPratos();
var HandlePratos = /** @class */ (function () {
    function HandlePratos() {
    }
    HandlePratos.prototype.inserePrato = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, nome, lactose, vegano, gluten, categoria_id, status, inserePrato;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, nome = _a.nome, lactose = _a.lactose, vegano = _a.vegano, gluten = _a.gluten, categoria_id = _a.categoria_id;
                        status = true;
                        return [4 /*yield*/, pratos.inserePrato({ nome: nome, lactose: lactose, vegano: vegano, gluten: gluten, categoria_id: categoria_id }, status)];
                    case 1:
                        inserePrato = _b.sent();
                        return [2 /*return*/, response.json(inserePrato)];
                }
            });
        });
    };
    HandlePratos.prototype.listaPrato = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var nome, listaPrato;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nome = request.params.nome;
                        return [4 /*yield*/, pratos.listaPrato({ nome: nome })];
                    case 1:
                        listaPrato = _a.sent();
                        return [2 /*return*/, response.json(listaPrato)];
                }
            });
        });
    };
    HandlePratos.prototype.listaTodosOsPratos = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var categoria_id, listaPrato;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        categoria_id = request.params.categoria_id;
                        return [4 /*yield*/, pratos.listaTodosOsPratos({ categoria_id: categoria_id })];
                    case 1:
                        listaPrato = _a.sent();
                        return [2 /*return*/, response.json(listaPrato)];
                }
            });
        });
    };
    HandlePratos.prototype.atualizaPrato = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, nome, lactose, vegano, gluten, categoria_id, status, id, atualizaPrato;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, nome = _a.nome, lactose = _a.lactose, vegano = _a.vegano, gluten = _a.gluten, categoria_id = _a.categoria_id, status = _a.status, id = _a.id;
                        return [4 /*yield*/, pratos.atualizaPrato({ nome: nome, lactose: lactose, vegano: vegano, gluten: gluten, categoria_id: categoria_id, status: status, id: id })];
                    case 1:
                        atualizaPrato = _b.sent();
                        return [2 /*return*/, response.json(atualizaPrato)];
                }
            });
        });
    };
    HandlePratos.prototype.deletaPrato = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, deletaPrato;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        return [4 /*yield*/, pratos.deletaPrato({ id: id })];
                    case 1:
                        deletaPrato = _a.sent();
                        return [2 /*return*/, response.json({ "return": "ID Prato Excluído: " + id })];
                }
            });
        });
    };
    return HandlePratos;
}());
exports.HandlePratos = HandlePratos;
//# sourceMappingURL=PratosController.js.map