let arr = [[1,2], [2, [3, 6]], [43.49, [2, 5, [6], 6, "Hola"]]];
arrString = JSON.stringify(arr);
arrString = arrString.replace(/\[/g, '');
arrString = arrString.replace(/\]/g, '');
items = arrString.split(',');
let flatArray = Array.prototype.concat.apply([], arr);
console.log(flatArray);
for( i in items ) {
  if( !isNaN(items[i]) ) {
    items[i] = Number(items[i]);
  }
}
console.log(items);
console.log(arr.flat(Infinity)); 