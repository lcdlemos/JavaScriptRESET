for(let i = 1; i <= 10; i++){
    console.log(i);
}

console.log();
let i = 1;
while(i <= 10){
    console.log(i);     //Outra alternativa é console.log(i++), se usar ++i tem que alterar o valor inicial de i para i = 0
    i++;
}

let alunos = ["Enzo", "Valenina", "Joana", "Marcus", "Alice", "Gerúndia"];
let notas = [[5.6, 7.2], [9.1, 8.4], [5.8, 4.6], [4.5, 8.5], [7.3, 6.9], [5.0, 9.4]];

let alunoSelecionado = 0;

for(alunoSelecionado; alunoSelecionado < alunos.length; alunoSelecionado++){
    let nomeAluno = alunos[alunoSelecionado];
    let notasAluno = notas[alunoSelecionado];

    let nota1 = notasAluno[0];
    let nota2 = notasAluno[1];
    let media = (nota1 + nota2)/2;

    console.log();
    console.log("Aluno: " + nomeAluno);
    console.log("1a Nota: " + nota1 + " - 2a Nota: " + nota2);
    console.log("Média: " + media);
}