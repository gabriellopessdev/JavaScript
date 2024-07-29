//interface

interface IAnimal {
  nome: string;
  tipo: "terrestre" | "aquático";
}

interface IFelinos extends IAnimal {
  visaoNoturna: boolean;
}

const animal: IAnimal = {
  nome: "Vaca",
  tipo: "terrestre"
}

const felino: IFelinos = {
  nome: "gato",
  tipo: "terrestre",
  visaoNoturna: true,
}
