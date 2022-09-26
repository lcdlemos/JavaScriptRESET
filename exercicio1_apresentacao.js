//Apresentacao

let nomeCompleto = 'Luiz Carlos de Lemos Júnior';
let apelido = 'Júnior';
let idade = 38;
let dataNascimento = '02 de maio de 1984';
let localNascimento = 'Campina Grande - PB';
let altura = 1.77;
let trabalhando = false;

let apresentacao = "Meu nome é " + nomeCompleto + " (sou conhecido como " + apelido + ") e tenho " + idade + " anos. Nasci no dia " + dataNascimento + ", na cidade de " + localNascimento + ". Tenho " + altura + "m de altura e atualmente estou " + (trabalhando ? 'empregado' : 'desempregado') + ".";

console.log(apresentacao);