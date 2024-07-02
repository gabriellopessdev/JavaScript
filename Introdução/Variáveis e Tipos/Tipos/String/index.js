let nome = "João";
let sobrenome = "Pedro";

nome.concat(sobrenome); //metodo de concatenar String
let fullName = nome.concat(sobrenome);
fullName = nome + " " + sobrenome;
fullName = `${nome} ${sobrenome}`;
//  "\""  Usado para escapar e mostra as aspas

console.log(fullName);

console.log(fullName.split()); //metodo para separar
console.log(fullName.split("")); //metodo para
console.log(fullName.split(" ")); //metodo para

console.log(fullName.includes("Ola")); //metodo para verificar se ha [] na variavel
console.log(fullName.startsWith("J")); //metodo para verificar se a variavel começa com []
console.log(fullName.endsWith("J")); //metodo para verificar se a variavel termina com []
