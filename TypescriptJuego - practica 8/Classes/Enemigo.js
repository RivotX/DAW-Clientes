"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enemigo = void 0;
var Enemigo = /** @class */ (function () {
    function Enemigo(nombre) {
        this.nombre = nombre;
        this.puntos_ataque = 0;
    }
    Enemigo.prototype.calcularFuerza = function () {
        var numeroAleatorio = Math.floor(Math.random() * 15) + 1;
        this.puntos_ataque = numeroAleatorio;
    };
    Enemigo.prototype.soltarDinero = function () {
        var numero = Math.floor(Math.random() * 10) + 1;
        return numero;
    };
    Enemigo.prototype.getNombre = function () {
        return this.nombre;
    };
    Enemigo.prototype.getPuntos_ataque = function () {
        return this.puntos_ataque;
    };
    Enemigo.prototype.setnombre = function (nombre) {
        this.nombre = nombre;
    };
    Enemigo.prototype.setPuntos_ataque = function (puntos_ataque) {
        this.puntos_ataque = puntos_ataque;
    };
    Enemigo.prototype.tostring = function () {
        var texto = "Tu enemigo será:\nnombre: " + this.nombre + "\npuntos_ataque: " + this.puntos_ataque;
        return texto;
    };
    return Enemigo;
}());
exports.Enemigo = Enemigo;
