let peso = 93.5;
let altura = 1.77;
let classificacao = "";
let grauObesidade = 0;

let imc = peso / (altura * altura);

if(imc < 18.5){
    classificacao = "Magreza";
}
else if(imc >= 18.5 && imc < 25.0){
    classificacao = "Normal";
}
else if(imc >= 25.0 && imc < 30.0){
    classificacao = "Sobrepeso";
    grauObesidade = 1;
}
else if(imc >= 30.0 && imc < 40.0){
    classificacao = "Obesidade";
    grauObesidade = 2;
}
else{
    classificacao = "Obesidade Mórbida";
    grauObesidade = 3;
}

console.log("IMC = " + imc + " - Classificação: " + classificacao);

switch(grauObesidade){
    case 1 :
        console.log("Cuidado! Você está acima do peso recomendado pela OMS.");
    break;
    case 2 :
        console.log("Cuidado! Você está acima do peso recomendado pela OMS.");
    break;
    case 3 :
        console.log("Cuidado! Você está acima do peso recomendado pela OMS.");
        console.log("É importante procurar um médico para avaliar sua saúde.");
    break;
    default :
    break;
}