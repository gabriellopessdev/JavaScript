//função para verificar alunos aprovados, coloca-los em um arrey e exibir-los 

const aluno = [
  {
    nome: "Gabriel",
    nota: 5,
  },
  {
    nome: "Mateus",
    nota: 9,
  },
  {
    nome: "Pedro",
    nota: 6,
  },
];

function alunosAprovados(arr, media) {
  let aprovados = [];

  for (let i = 0; i < arr.length; i++) {
    const { nome, nota } = arr[i];

    if (nota > media) {
      aprovados.push(nome);
    }
  }

  return aprovados;
}

console.log(alunosAprovados(aluno, 5));

//função para qualqular quantos anos uma pessoa tera daqui a alguns anos

function calcularIdadeFutura(anos) {
    return `Daqui a ${anos} anos, ${this.name} terá ${this.age + anos} anos de idade.`
    
}

const pessoa1 = {
    name: "Maria",
    age: 25
}

const pessoa2 = {
    name: "João",
    age: 40
}

const pet = {
    name: "Jujuba",
    age: 2
}

console.log(calcularIdadeFutura.call(pessoa1 ,10));
console.log(calcularIdadeFutura.apply(pessoa2 ,[7]));
console.log(calcularIdadeFutura.call(pet ,5));