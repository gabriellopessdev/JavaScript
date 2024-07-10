function substituiNumerosPares(array) {
    if (!array) return "array null"
    if (!array.length) return "array vazio"
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      console.log("Voce ja é zero");
    } else if (array[i] % 2 === 0) {
        console.log(`Substituindo ${array[i]} por 0...`);
      array[i] = 0;
    }
  }
  return array;
}
let arr = [5,4,8,1,3,0]
console.log(substituiNumerosPares(arr));
console.log(substituiNumerosPares([]));
console.log(substituiNumerosPares(null));
