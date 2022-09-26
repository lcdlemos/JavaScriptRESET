//1
let nomeFulano = 'Zeca';
let nomeBeltrano = "Pituca";
let mesmoNome = (nomeBeltrano == nomeFulano);
console.log("1) Nomes iguais? " + mesmoNome);

//2
console.log();
let idade = 19;
let maiorIdade = (idade >= 18);
console.log("2) É de maior? " + maiorIdade);

//3
console.log();
let valor = 1000.00;
let valorComJuros = 1.1 * valor;
console.log("3) Valor original: R$ " + valor + ", e com juros: R$ " + valorComJuros);

//4
console.log();
let quantidade = 5;
let item1 = 8;
let item2 = 9;
let item3 = 7;
let item4 = 5;
let item5 = 8;
let media = (item1 + item2 + item3 + item4 + item5)/quantidade;
console.log("4) Media aritmética: " + media);

//5
console.log();
let receita = 1510;
let custo = 1050;
let lucro = receita - custo;
let margem = (lucro/receita)*100;   //em percentagem
console.log("5) Lucro bruto: R$ " + lucro + " e Margem bruta: " + margem + "%");

//6
console.log();
let saldo = 1000.00;
console.log("6) Saldo Inicial: R$ " + saldo);
let calca = 99.90;
let salario = 2500.00;
let doacao = 0.10;
let saldoAtual = saldo + salario - calca - doacao;
console.log("   Saldo Após Salarário, Compra da Calça e Doação: R$ " + saldoAtual);
let arCondicionado = 0.25*saldoAtual;
saldoAtual = saldoAtual - arCondicionado;
console.log("   Saldo Após Compra do Ar: R$ " + saldoAtual);
let divida = saldoAtual/2;
saldoAtual = saldoAtual - divida;
console.log("   Saldo Final: R$ " + saldoAtual);