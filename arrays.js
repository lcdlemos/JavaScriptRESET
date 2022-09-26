let vetor = [];
console.log(vetor);

vetor[1] = "Luiz";
console.log(vetor);

vetor[4] = "Carlos";
console.log(vetor);

console.log(vetor[1], vetor[4]);
console.log(vetor[1], vetor[3], vetor[4]);

console.log(vetor.length);

console.log();
let matriz = [];
matriz[0] = ["Enzo", "Márcio", "Valentina", "Chico"];
console.log(matriz);

matriz[1] = [1, 2, 3, 4];
console.log(matriz);

console.log();
let alunos = ["João", "Leonardo", "Pedro", "Olívia"];
let notas = [[9.3, 7.2], [9.5, 8.0], [8.2, 9.3], [8.5, 10.0]];
console.log(alunos);
console.log(notas);

console.log();
let alunoSelecionado = 0;
let nomeAluno = alunos[alunoSelecionado];
let notasAluno = notas[alunoSelecionado];
console.log(nomeAluno);
console.log(notasAluno);

alunoSelecionado = 2;
nomeAluno = alunos[alunoSelecionado];
notasAluno = notas[alunoSelecionado];
console.log(nomeAluno);
console.log(notasAluno);

console.log();
let nota1 = notasAluno[0];
let nota2 = notasAluno[1];
let media = (nota1 + nota2)/2
console.log(nomeAluno);
console.log("1a nota: " + nota1);
console.log("2a nota: " + nota2);
console.log("Média " + media);