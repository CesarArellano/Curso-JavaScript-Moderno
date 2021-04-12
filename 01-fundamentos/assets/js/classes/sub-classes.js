class Persona {
  // Métodos y propiedades que se pueden ocupar sin instanciar la clase
  static _conteo = 0; // Instancias inicializadas, trabajan de manera oculta e independiente
  
  static get getConteo() {
    return Persona._conteo + ' instancias';
  }

  static mensaje() {
    console.log(this.nombre);
    console.log('Hola a todos, soy un método estático');
  }

  nombre = '';
  codigo = '';
  frase = '';
  comida  = '';

  constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
    Persona._conteo++;
  }
  
  set setComidaFavorita( comida ) {
    this.comida = comida;
  }

  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es: ${this.comida}`;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre}, y mi identidad es: ${this.codigo}`);
  }

  miFrase() {
    console.log(`${this.codigo} dice ${this.frase}`);
  }
}

class Heroe extends Persona {
  clan = 'Sin clan';
  constructor(nombre, codigo, frase) {
    super(nombre, codigo, frase); // Constructor padre
    this.clan = 'The Avengers'; // Siempre poner sets después del super.
  }
  
  quienSoy() {
    console.log(`Soy ${this.nombre}, ${this.clan}`);
    super.quienSoy(); // Hacer uso del método de la clase padre.
  }
  
}

const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Hola soy Spiderman');

console.log(spiderman);
spiderman.quienSoy();