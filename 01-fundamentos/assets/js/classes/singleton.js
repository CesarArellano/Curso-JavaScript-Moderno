class Singleton {
  // Propiedades globales, que se conservan con el tiempo.
  static instancia;
  nombre = '';

  constructor (nombre = '') {
    // undefined
    // ! true
    // !! false;
    if(!!Singleton.instancia) {
      return Singleton.instancia;
    }
    
    Singleton.instancia = this;
    this.nombre = nombre;
    return this;
  }
}

const instancia1 = new Singleton('IronMan');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Black Panter');

console.log(`Nombre en la instancia es: ${ instancia1.nombre }`);
console.log(`Nombre en la instancia es: ${ instancia2.nombre }`);
console.log(`Nombre en la instancia es: ${ instancia3.nombre }`);