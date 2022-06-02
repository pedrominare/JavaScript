/*
var ou let - não precisa ser inicializada.
Predominantemente, usa-se o let ao invés de var.

var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area)
var area;

as variáveis do tipo const precisam ser inicializadas.

let forma = 'retangulo';
let altura = 5;
let comprimento = 7;
let area;

if (forma === 'retangulo'){
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

area = altura * comprimento;
console.log(area)
*/

const forma = 'retangulo';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'retangulo'){
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area)