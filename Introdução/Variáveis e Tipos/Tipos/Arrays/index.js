let array = [];

array.push(3); //adiciona algo a ultima posição do array
array.push(2);
array.push(5);

console.log(array);
array.pop(); //Retira a Ultima posição do array
array.shift(); //Retira a Primeira posição do array

array.unshift(1); //adiciona na primeira posição do array
console.log(array);

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
