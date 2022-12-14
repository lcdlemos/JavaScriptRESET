let colaboradores = ['Rhoger', 'Cléverson', 'Gleysberto', 'Nádio', 'Rosiméri', 'Regislane', 'Agripino', 'Wellison'];
let idades = [69, 66, 58, 61, 60, 64, 59, 55];
let temposDeTrabalho = [31, 29, 30, 26, 25, 24, 26, 29];

function verificarAposentadoria(nome) {

    colaborador = false
    idade = 0
    tempoTrabalho = 0

    // buscando um colaborador pelo nome
    for (posicao = 0; posicao < colaboradores.length; posicao++) {

        if (nome == colaboradores[posicao]) {
            colaborador = true
            idade = idades[posicao]
            tempoTrabalho = temposDeTrabalho[posicao]
        }
    }

    // se encontrar o colaborador, verifica as regras de aposentadoria
    if (colaborador) {
        
        porIdade = (idade >= 65)
        porTempoDeTrabalho = (tempoTrabalho >= 30)
        porIdadeComTempoDeTrabalho = (idade >= 60 && tempoTrabalho >= 25)

        // não importa qual regra seja atendida
        // se qualquer uma for, o colaborador pode se aposentar
        if (porIdade || porTempoDeTrabalho || porIdadeComTempoDeTrabalho) {
            console.log("Parabéns, já pode sair de férias eternas :)")
        } else {
            console.log("Infelizmente, ainda falta um tempo :(")
        }
    
    } else {
        console.log("Colaborador inválido :|")
    }
}

verificarAposentadoria('Rosiméri');     // true (regra 3)
verificarAposentadoria('Agripino');     // false (falta 1 ano de idade para regra 3)
verificarAposentadoria('Rhoger');       // true (todas)
verificarAposentadoria('Hudnélson');    // false (colaborador inexistente)
verificarAposentadoria('Gleysberto');   // true (regra 2)
verificarAposentadoria('Regislane');    // false (falta 1 ano de idade para regra 1 e 1 de trabalho para regra 3)
verificarAposentadoria('Cléverson');    // true (regras 1 e 3)
verificarAposentadoria('Nádio');        // true (regra 3)
verificarAposentadoria('Wellison');     // false (falta 1 ano de trabalho para regra 2)
verificarAposentadoria('Florisberto');  // false (colaborador inexistente)