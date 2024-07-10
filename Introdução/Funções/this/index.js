const pessoa = {
  firstName: "Gabriel",
  lastName: "Lopes",
  id: 1,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  getId: function () {
    return this.id;
  },
};

console.log(pessoa.fullName());
console.log(pessoa.getId());

//Manipulando o "this"

pessoa.firstName = "Miguel";

const pessoa1 = {
    name: pessoa.firstName
}

const animal = {
  name: "Tob",
};

function getSomething() {
  console.log(this.name);
}

getSomething.call(pessoa1,);//Metodo Call invoca a função atribui o contexto de "this"
