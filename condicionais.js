let nota1 = 8.0;
let nota2 = 10.0;
let media = (nota1 + nota2)/2;
let conceito = "";

if(media >= 7.0){
    console.log("O aluno passou com média " + media);
    if(media >= 9.0){
        conceito = "Ótimo";
    }
    else if(media >= 8.0 && media < 9.0){
        conceito = "Bom";
    }
    else{
        conceito = "Regular";
    }
}
else{
    console.log("O aluno não passou porque ficou com média " + media);
    if(media >= 6.0){
        conceito = "Ruim";
    }
    else{
        conceito = "Péssimo";
    }
}

console.log("Seu conceito foi " + conceito + ".");

switch(conceito){
    case "Péssimo" :
        console.log("Você é muito burro!");
    break;
        
    case "Ruim" :
        console.log("Precisa estudar mais.");
    break;

    case "Regular" :
        console.log("Caso se esforce, pode melhorar.");
    break;

    case "Bom" :
        console.log("Parabéns, está quase lá!");
    break;

    case "Ótimo" :
        console.log("Espetacular, continue assim!");
    break;
}