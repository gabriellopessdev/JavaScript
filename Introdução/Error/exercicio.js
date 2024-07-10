function validaArray(array, number) {
  try {
    if (!array && !number) throw new ReferenceError("Envie todos os Parâmetros!");

    if (typeof array !== "object") throw new TypeError("Envie um tipo object!");

    if (typeof number !== "number") throw new TypeError("Envie um tipo number!");

    if (array.length !== number)throw new RangeError("Tamanho do Array invalido!");

    return array;
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log("Este erro é um ReferenceError!");
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log("Este erro é um TypeError!");
      console.log(e.message);
    } else if (e instanceof RangeError) {
      console.log("Este erro é um RangeError!");
      console.log(e.message);
    } else {
      console.log("Tipo de erro não esperado" + e);
      console.log(e.message);
    }
  }
}

console.log(validaArray([],5));
