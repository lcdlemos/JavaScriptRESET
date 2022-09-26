function solucao(s) {
    let contribuicaoINSSMensal = 0.0;
    let contribuicaoINSSAnual = 0.0;
    let quantidadePessoasNecessarias = 0.0;
    
    if(s <= 1045.00){
        contribuicaoINSSMensal = 0.075 * s
        contribuicaoINSSAnual = contribuicaoINSSMensal * 13.3
        quantidadePessoasNecessarias = s/contribuicaoINSSMensal
    }
    else if(1045.00 < s && s <= 2089.60){
        contribuicaoINSSMensal = 0.09 * s
        contribuicaoINSSAnual = contribuicaoINSSMensal * 13.3
        quantidadePessoasNecessarias = s/contribuicaoINSSMensal
    }
    else if(2089.60 < s && s <= 3134.40){
        contribuicaoINSSMensal = 0.12 * s
        contribuicaoINSSAnual = contribuicaoINSSMensal0 * 13.3
        quantidadePessoasNecessarias = s/contribuicaoINSSMensal
    }
    else{
        if(s <= 6101.06){
          contribuicaoINSSMensal = 0.14 * s
          contribuicaoINSSAnual = contribuicaoINSSMensal * 13.3
          quantidadePessoasNecessarias = s/contribuicaoINSSMensal
        }
        else{
          contribuicaoINSSMensal = 0.14 * 6101.07
          contribuicaoINSSAnual = contribuicaoINSSMensal * 13.3
          quantidadePessoasNecessarias = s/contribuicaoINSSMensal
        }
    }

    return [contribuicaoINSSMensal, contribuicaoINSSAnual, quantidadePessoasNecessarias];
}

module.exports = { solucao }

console.log(solucao(1095.30))
console.log(solucao(3500.00))
console.log(solucao(12230.50))