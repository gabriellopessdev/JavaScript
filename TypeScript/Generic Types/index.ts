//Generic Types

function adicionaLista<T>(array: any[], valor: T) {
  return array.map(() => valor)
}

adicionaLista([1, "a", 6], 4); 