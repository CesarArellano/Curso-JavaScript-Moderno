// Propiedades privadas
class Rectangulo {
  #area = 0; // # indica propiedad privada.

  constructor(base = 0, altura = 0) {
    this.base = base;
    this.altura = altura;
    this.#area = base * altura;
  }
  calcularArea() {
    console.log(this.#area * 2);
  }
}

const rectangulo = new Rectangulo(10,15);
// rectangulo.#area = 100; Prohibido
rectangulo.calcularArea();
console.log(rectangulo);