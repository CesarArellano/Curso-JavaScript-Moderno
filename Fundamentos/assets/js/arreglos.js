let games = ['Zelda', 'Mario', 'Metroid', 'Chrono'];

games.forEach((item, index, arr) => {
  console.log(item,index,arr);
});

games.push('F-Zero');
console.log(games);
games.unshift('Fire Emblem');
console.log(games);
games.splice(1, 3);
console.log(games);

console.log(games.indexOf('Metroid')); // Este método es CaseSensitive, si no encuentra imprime -1.