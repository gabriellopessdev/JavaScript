//callback usar uma função como argumento para outra função

const calcula = function (operacao, numb1, numb2) {
  return operacao(numb1, numb2);
};

const soma = function (numb1, numb2) {
  return numb1 + numb2;
};

const subtrai = function (numb1, numb2) {
  return numb1 - numb2;
};

const resultadoSoma = calcula(soma, 1, 2);
const resultadoSubtrai = calcula(subtrai, 5, 2);

console.log(resultadoSoma, "\n", resultadoSubtrai);
