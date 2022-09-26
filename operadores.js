//Operadores Metematicos

let a = 60;
let b = 20;
let c = a + b;
let d = a - b;
let e = a * b;
let f = a / b;
let g = b % f;  //resto inteiro da divisao

console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);

a++;
b--;
console.log(a);
console.log(b);

console.log(++a);       //incrementa para exibir, se usar a++, mostra a e depois que incrementa
console.log(--b);

let x = 2;
let y = 3;
let z = x ** y;    //** representa a potencia
let w = y ** x;

console.log(z,w);

//Operadores Relacionais

let m = 10;
let n = 11;
let o = (m == n);   //o e booleano e recebe o resultado da comparacao para o teste de iguais
let p = (m != n);   //p sera verdadeiro se m e n forem diferentes

console.log(o, p);

let k = "22";
let l = 22;

console.log(k == l, k === l);   //no primeiro caso, compara os 22 que sao iguais, no segundo caso e falso porque as tres igualdades comparam alem dos valores os tipos, e um e string e outro e numero

console.log(m > n, m < n, k >= l, k <= l);

let i1 = true;
let i2 = false;

console.log(i1 && i2);
console.log(i1 || i2);
console.log(!i2);