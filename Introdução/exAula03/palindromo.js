function verificarPalindromo(string) {
    if(!string) return;

    return string.split("").reverse().join("") === string;
}

console.log(verificarPalindromo("ovo e ovo"));


function verificarPalindromo2(string) {//Ultiliza o for para comparar o primeiro indice com o ultimo indice por meio do if com a lista string[i] para ver se são iguais e subtraindo - i  para assim sempre comparar os caracteres em posições opostas
    if(!string) return;

    for (let i = 0; i < string.length / 2; i++) {
       if(string[i] !== string[string.length - 1 - i]){
        return false;
       }
        
    }

    return true
}