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

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Hola soy el hombre araña');
const ironman = new Persona('Tony Stark', 'IronMan', 'Hola soy IronMan');

spiderman.quienSoy();
spiderman.setComidaFavorita = 'Pay de Limón';
console.log(spiderman.getComidaFavorita);
console.log(spiderman);
ironman.miFrase();

console.log(`Conteo estático ${ Persona.getConteo }`);
Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo';

console.log(Persona.propiedadExterna);