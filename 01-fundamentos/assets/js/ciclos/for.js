
const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For tradicional');
for( let i = 0; i < heroes.length; i++ ) {
    console.log( heroes[i] );
}


console.warn('For in'); //Trabajar con índices
for( let i in heroes ) {
    console.log( heroes[i] );
}

console.warn('For of');
for( let heroe of heroes ) { // Trabajmos el valor directamente
    console.log( heroe );
}



