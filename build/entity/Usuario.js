"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var typeorm_1 = require("typeorm");
// import {v4 as uuid} from 'uuid';
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    __decorate([
        typeorm_1.PrimaryColumn('int'),
        __metadata("design:type", String)
    ], Usuario.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column('text'),
        __metadata("design:type", String)
    ], Usuario.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column('text'),
        __metadata("design:type", String)
    ], Usuario.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column('boolean'),
        __metadata("design:type", Boolean)
    ], Usuario.prototype, "admin", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Usuario.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Usuario.prototype, "updated_at", void 0);
    Usuario = __decorate([
        typeorm_1.Entity("usuarios")
    ], Usuario);
    return Usuario;
}());
exports.Usuario = Usuario;
//# sourceMappingURL=Usuario.js.map