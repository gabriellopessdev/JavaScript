//Type

interface IAnimal {
  nome: string;
  tipo: "terrestre" | "aquático";
  domestico: boolean;
}

interface IFelinos extends IAnimal {
  visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
  porte: "P" | "M" | "G";
}

type IDomestico = IFelinos | ICanino;

const animal: IDomestico = {
  nome: "cachorro",
  porte: "M",
  tipo: "terrestre",
  domestico: true,
}