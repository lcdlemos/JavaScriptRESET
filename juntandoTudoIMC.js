//Cálculo do IMC e Nível de Peso

let nivel = 0;
let niveis = ["Muio Abaixo do Peso", "Abaixo do Peso", "Normal", "Acima do Peso", "Obesidade Grau I", "Obesidade Grau II", "Obesidade Grau III"];

let pessoas = ["Ygor", "Haysa", "Dado", "Luiz"];
let pesos = [70, 55, 75, 95.3];
let alturas = [1.77, 1.60, 1.70, 1.77];

//Funções
function calcularIMC(peso, altura){
    imc = peso / (altura ** 2);
    return imc;
}

function verificarNivel(imc){
    if(imc < 17){
        nivel = 0;
    }
    else if(imc >= 17 && imc < 18.4){
        nivel = 1;
    }
    else if(imc >= 18.4 && imc < 25){
        nivel = 2;
    }
    else if(imc >= 25 && imc < 30){
        nivel = 3;
    }
    else if(imc >= 30 && imc < 35){
        nivel = 4;
    }
    else if(imc >= 35 && imc < 40){
        nivel = 5;
    }
    else{
        nivel = 6;
    }

    return nivel;
}

//Execução

for(indice = 0; indice < pessoas.length; indice++){
    let pessoa = pessoas[indice];
    let peso = pesos[indice];
    let altura = alturas[indice];
    
    imc = calcularIMC(peso, altura);
    nivel = verificarNivel(imc);
    console.log();
    console.log("Nome: " + pessoas[indice]);
    console.log("Peso: " + pesos[indice]);
    console.log("Altura: " + alturas[indice]);
    console.log("IMC: " + imc);
    console.log("Nível: " + niveis[nivel]);
}