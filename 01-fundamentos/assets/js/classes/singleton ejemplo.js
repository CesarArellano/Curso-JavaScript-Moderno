class Singleton {
  // Propiedades globales, que se conservan con el tiempo.
  static instancia;
  numeroAleatorio = '';

  constructor (numeroAleatorio = 0) {
    if(!!Singleton.instancia) {
      return Singleton.instancia;
    }
    
    Singleton.instancia = this;
    this.numeroAleatorio = numeroAleatorio;
    return this;
  }
}
const numero1 = Math.random();
const numero2 = Math.random();
const numero3 = Math.random();
console.log(numero1, numero2, numero3);
const instancia1 = new Singleton(numero1);
const instancia2 = new Singleton(numero2);
const instancia3 = new Singleton(numero3);

console.log(`Número 1 en la instancia es: ${ instancia1.numeroAleatorio }`);
console.log(`Número 2 en la instancia es: ${ instancia2.numeroAleatorio }`);
console.log(`Número 3 en la instancia es: ${ instancia3.numeroAleatorio }`);