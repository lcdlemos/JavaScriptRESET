function atravessar() {         //função que não precisa de parâmetros
    console.log("Olhar para a direita.");
    console.log("Olhar para a esquerda.");
    console.log("Atravessar");
}
atravessar();

console.log();
function quaradado(i){          //função que precisa da passagem do parâmetro i
    console.log("Quadrado de %d é %d", i, i*i);
}
quaradado(10);        // tem que passar o valor de i senão retorna NaN
quaradado();
quaradado(13);

console.log();
function multiplicar(a, b){          //função que precisa da passagem dos parâmetros a e b para multiplicação
    console.log("O produto entre %d e %d é %d", a, b, a*b);
}
multiplicar(10, 20);
multiplicar(2, 11);

console.log();
function multiplicarComRetorno(a, b){
    return (a*b);
}
multiplicarComRetorno(10, 20);              //não exibe nada, pois a função só retorna valor agora.
console.log(multiplicarComRetorno);         //mostra que a chamada é do tipo função
console.log(multiplicarComRetorno(3, 17));  //durante impressão, chama a função e exibe seu retorno

let resultado = multiplicarComRetorno(3, 4);
console.log(resultado);                     //imprime o valor da variável atribuída ao retorno da função