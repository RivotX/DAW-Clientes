class Enemigo {
  private nombre: string;
  private puntos_ataque: number;
  constructor(nombre: string) {
    this.nombre = nombre;
    this.puntos_ataque = 0;
  }

  public calcularFuerza(): void {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    this.puntos_ataque = numeroAleatorio;
  }
  public soltarDinero(): number {
    const numero = Math.floor(Math.random() * 10) + 1;
    return numero;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getPuntos_ataque(): number {
    return this.puntos_ataque;
  }

  public setnombre(nombre: string) {
    this.nombre = nombre;
  }

  public setPuntos_ataque(puntos_ataque: number) {
    this.puntos_ataque = puntos_ataque;
  }

  public tostring() {
    console.log(
      "nombre: " + this.nombre + "puntos_ataque: " + this.puntos_ataque
    );
  }
}
