"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jugador = void 0;
var Jugador = /** @class */ (function () {
    function Jugador(nombre) {
        this.nombre = nombre;
        this.puntos_salud = 20;
        this.puntos_ataque = 0;
        this.dinero = 2;
    }
    Jugador.prototype.calcularFuerza = function () {
        var numeroAleatorio = Math.floor(Math.random() * 10) + 1;
        this.puntos_ataque = numeroAleatorio;
    };
    Jugador.prototype.getNombre = function () {
        return this.nombre;
    };
    Jugador.prototype.getPuntos_salud = function () {
        return this.puntos_salud;
    };
    Jugador.prototype.getPuntos_ataque = function () {
        return this.puntos_ataque;
    };
    Jugador.prototype.getDinero = function () {
        return this.dinero;
    };
    Jugador.prototype.setnombre = function (nombre) {
        this.nombre = nombre;
    };
    Jugador.prototype.setPuntos_salud = function (puntos_salud) {
        this.puntos_salud = puntos_salud;
    };
    Jugador.prototype.setPuntos_ataque = function (puntos_ataque) {
        this.puntos_ataque = puntos_ataque;
    };
    Jugador.prototype.setDinero = function (dinero) {
        this.dinero = dinero;
    };
    Jugador.prototype.tostring = function () {
        var texto = "nombre:" +
            this.nombre +
            "\npuntos_salud: " +
            this.puntos_salud +
            "\npuntos_ataque: " +
            this.puntos_ataque +
            "\nDinero " +
            this.dinero;
        return texto;
    };
    return Jugador;
}());
exports.Jugador = Jugador;
