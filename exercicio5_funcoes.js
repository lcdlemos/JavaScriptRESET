//1
console.log("1)");
function imprimir(argumento){
    console.log("   " + argumento);
}
imprimir("Luiz Carlos");                     //imprime o que for passado
imprimir(50);

//2
console.log("2)");
/* Verifica se os dois nomes informados são iguais. */
function mesmoNome(nome1, nome2){
    return(nome1 == nome2);
}
imprimir(mesmoNome("Luiz", "Carlos"));      //uso de imprimir para mostra o valor retornado
imprimir(mesmoNome("Uai", "Uai"));

console.log();
/* Verificação de maioridade. */
function maiorIdade (idade){                //recebe idade como argumento
    return(idade >= 18);                    //retorna verdadeiro se for maior ou igual a 18
}
imprimir(maiorIdade(17));
imprimir(maiorIdade(21));

console.log();
/*Realiza o cálculo do valor do boleto com juros. Atualmente, a taxa de juros é de 10%.*/
function valorComJuros(valor){
    return(1.1 * valor);                    //calcula 10% do valor passado (1 + 0,1)
}
imprimir(valorComJuros(1000));
imprimir(valorComJuros(580));

console.log();
/*Cálculo da média aritmética de todos os itens presentes no array passado como argumento.*/
function mediaAritmetica(numeros){          //recebe a variavel números, neste caso, o vetor de valores
    soma = 0;                               //define o valor inicial da soma como nulo
    for(i = 0; i < numeros.length; i++){    //varre o vetor somando seus elementos
        soma += numeros[i];
    }
    return(soma/numeros.length);            //retorna a soma total pelo número de elementos (média)
}
imprimir(mediaAritmetica([15, 21, 37]));
imprimir(mediaAritmetica([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log();
/*Cálculo da margem bruta da empresa com base na receita líquida de vendas e no custo dos
produtos vendidos. O resultado final é multiplicado por 100 para considerar o valor percentual.*/
function margemBruta(receitaLiquida, custo){
    lucroBruto = receitaLiquida - custo;        //calcula lucro que sera utilizado para calculo da margem bruta
    return((lucroBruto/receitaLiquida)*100);    //margem bruta = (lucro / receita) * 100%
}
imprimir(margemBruta(1500, 895));

//3
console.log("3)");
cwi = "CWI";
reset = "Reset";
imprimir(mesmoNome(cwi, cwi));      //true
imprimir(mesmoNome(cwi, reset));    //false

imprimir("---");

imprimir(maiorIdade(30));           //true
imprimir(maiorIdade(18));           //true
imprimir(maiorIdade(5));            //false

imprimir("---");

imprimir(valorComJuros(100));       //110
imprimir(valorComJuros(984.5));     //1082.95

imprimir("---");

imprimir(mediaAritmetica([1]));                 //1
imprimir(mediaAritmetica([1, 4, 10]));          //5
imprimir(mediaAritmetica([1, 2, 3, 4, 5]));     //3

imprimir("---");

imprimir(margemBruta(1000000, 500000));         //50
imprimir(margemBruta(528459.11, 632501.87));    //-19.68[...]