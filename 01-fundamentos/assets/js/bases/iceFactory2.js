function Rectangulo(alto, ancho) {

  return Object.freeze({
    calcArea
  });

  function calcArea () {

    return alto * ancho;
  }

}

const cuadrado = Rectangulo(10,10);
console.log(cuadrado.calcArea());

Rectangulo.prototype.calcArea = () => alto + ancho;

console.log(cuadrado.calcArea()); // 100