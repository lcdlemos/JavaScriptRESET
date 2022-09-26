//1
console.log("1)");
let cachorros = ["Nala", "Bartolomeu", "Sherlock", "Apolo", "Atena", "Bruce", "Aslan"];
let i = 0;
while(i < cachorros.length){
    console.log("   " + cachorros[i]);
    i++;
}

//2
console.log();
let numeros = [1, 2, 3, 5, 8, 13, 21, 23, 34, 55];
let soma = 0;
for(let i = 0; i < numeros.length; i++){
    soma += numeros[i];
}
let media = soma/numeros.length;
console.log("2) Média: " + media);

//3
console.log();
let nome = "Luiz";
let comum = false;
let nomesComuns = ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia", 
"Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia", 
"Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina", 
"Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia", 
"Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda", 
"Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"];
for(let i = 0; i < nomesComuns.length; i++){
    if(nome == nomesComuns[i]){
        comum = true;
        break;
    }
    else{
        comum = false;
    }
}

if(comum == true){
    console.log("3) É, nome comum :P");
}
else{
    console.log("3) Diferentão, hein? XD");
}