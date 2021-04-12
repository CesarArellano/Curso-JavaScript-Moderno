class Persona {
  static constructorPorObjeto({nombre, apellido, pais}) {
    return new Persona(nombre, apellido, pais);
  }
  constructor(nombre, apellido, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }
  getInfo() {
    console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
  }
}

const nombre1 = 'Melissa',
      apellido1 = 'Flores',
      pais = 'Honduras';

const cesar = {
  nombre: 'César',
  apellido: 'Arellano',
  pais: 'México'
};

const persona1 = new Persona(nombre1, apellido1, pais); // Constructor básico
const persona2 = Persona.constructorPorObjeto(cesar); // Constructor por objeto literal;

persona1.getInfo();
persona2.getInfo();