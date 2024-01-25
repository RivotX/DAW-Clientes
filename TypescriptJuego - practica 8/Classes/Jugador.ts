export class Jugador {
  nombre: string;
  puntos_salud: number;
  puntos_ataque: number;
  dinero: number;
  constructor(nombre: string) {
    this.nombre = nombre;
    this.puntos_salud = 20;
    this.puntos_ataque = 0;
    this.dinero = 2;
  }

  public calcularFuerza(): void {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    this.puntos_ataque = numeroAleatorio;
  }

  public getNombre(): string {
    return this.nombre;
  }
  public getPuntos_salud(): number {
    return this.puntos_salud;
  }
  public getPuntos_ataque(): number {
    return this.puntos_ataque;
  }
  public getDinero(): number {
    return this.dinero;
  }

  public setnombre(nombre: string) {
    this.nombre = nombre;
  }
  public setPuntos_salud(puntos_salud: number) {
    this.puntos_salud = puntos_salud;
  }
  public setPuntos_ataque(puntos_ataque: number) {
    this.puntos_ataque = puntos_ataque;
  }
  public setDinero(dinero: number) {
    this.dinero = dinero;
  }
  public tostring(): string {
    let texto =
      "nombre:" +
      this.nombre +
      "\npuntos_salud: " +
      this.puntos_salud +
      "\npuntos_ataque: " +
      this.puntos_ataque +
      "\nDinero " +
      this.dinero;
    return texto;
  }
}
