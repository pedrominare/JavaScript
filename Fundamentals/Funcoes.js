/* Finalmente, funcoes
    Parâmetros

    Expressão de função

    Exemplo:

soma(20, 60)
somaa(20,20)

var soma = function(num1, num2) {return console.log(`${num1 + num2} CENTIMETROS.`)};
function somaa(num1, num2) {return console.log(`${num1 + num2} CENTIMETROS.`)};
*/

const apresentarArrow = nome => {
    desc = `Meu nome é ${nome}.\n`; 
    return console.log(desc);
}

const soma = (num1, num2) => {
    return console.log(num1 + num2);
}

apresentarArrow("teste");
soma(1,2);//