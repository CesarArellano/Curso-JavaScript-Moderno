class Rectangulo {

  constructor (alto, ancho) {

    this.alto = alto;

    this.ancho = ancho;

    
  }

  // Getter

  get area() {

    return Object.freeze(this.calcArea());

  }

  // Método

  calcArea () {

    return this.alto * this.ancho;

  }

}

const cuadrado = new Rectangulo(10, 10);
Rectangulo.prototype.calcArea = function() {
  return this.alto + this.ancho;
};

const cuadrado1 = new Rectangulo(1090, 10);

console.log(cuadrado.area); // 100
console.log(cuadrado1.area); // 100