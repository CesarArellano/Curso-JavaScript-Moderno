class PersonaNatural {

  nombre = '';
  codigo = '';
  frase = '';
  comida  = '';

  constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
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

const spiderman = new PersonaNatural('Peter Parker', 'Spiderman', 'Hola soy el hombre araña');
const ironman = new PersonaNatural('Tony Stark', 'IronMan', 'Hola soy IronMan');

spiderman.quienSoy();
spiderman.setComidaFavorita = 'Pay de Limón';
console.log(spiderman.getComidaFavorita);
console.log(spiderman);
ironman.miFrase();
