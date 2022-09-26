function solucao(valorMinimo, valorMaximo, valorDado){

    let vetor = [];
    let posicao = 0;
    vetor[0] = valorMinimo;

    for(i = 1; i <= (valorMaximo - valorMinimo); i++){
        vetor[i] = vetor[i - 1] + 1;
        if(vetor[i] == valorDado){
            posicao = i;
        }
    }
    return posicao;
}

module.exports = { solucao }

console.log(solucao(0, 20, 12))
console.log(solucao(0, 10, 4))
console.log(solucao(1, 10, 4))