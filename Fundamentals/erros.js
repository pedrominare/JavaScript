const nome = "Pedro";
const idade = 27;
const cidade = "Goiânia";

const apresentacao = `Olá, meu nome é ${nome}, minha idade é 
${idade >= 0 ? idade : "nem fui fecundado ainda"}
e nasci na cidade de ${cidade}`;

console.log(apresentacao);