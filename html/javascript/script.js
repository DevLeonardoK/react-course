//Function to return console.log, somente digitar a variavel que vai aparecer
function show(info) {
  return console.table(info);
}

//OPERADORES BÁSICOS
// const valor = 10;
// console.log("soma da const valor: ", valor + valor);
// console.log("divisao da const valor: ", valor / valor);
// console.log("multiplicação da const valor: ", valor * valor);
// console.log("subtração da const valor: ", valor - valor);

//OPERADORES LÓGICOS
// let nota = 5;

// switch (nota) {
//   case nota < 5:
//     console.log("Abaixo da média");
//     break;
//   case (nota = 5):
//     console.log("Na média");
//     break;
//   default:
//     console.log("Acima da média");
// }

//OPERADOR ? e :
// const nota = 9;
// nota > 5 ? console.log("apovado") : console.log("Reprovado");

//VARIAVEIS

// function calcular(x) {
//   console.log(x);
// }

// calcular(57);

//LAÇOS DE REPETIAÇÃO
// for (let i = 1; i <= 5; i++) {
//   console.log(`${i} x 5 == ${i * 5}`);
// }

// console.log("=================");
// const valores = [1, 2, 3, 4, 5];
// valores.forEach((value, index) => {
//   console.log(`${value} X 5 == ${value * 5}`);
// });

// console.log("=================");
// const valores2 = [1, 2, 3, 4, 5];
// const resultado = valores2.map((value) => {
//   return value * 5;
// });

// console.log(resultado);

//Arrow function
// const subtrair = (num1, num2) => num1 - num2;

// const somar = (n1, n2) => n1 + n2;

// const resultadoSoma = somar(10, 5);
// console.log(resultadoSoma);

//Arrays
const alunos = [
  {
    nome: "Paulo",
    idade: 18,
  },
  {
    nome: "José",
    idade: 25,
  },
  {
    nome: "João",
    idade: 6,
  },
];

//Adiciona novo objeto no array
// alunos.push({
//   nome: "João",
//   idade: 7,
// });

const alunosFiltrados = alunos.filter((aluno) => aluno.idade >= 18);
//Retorna um array

const alunoPaulo = alunos.find((aluno) => aluno.nome == "Paulo");
//Retorna somente o objeto

const alunoJose = alunos.findIndex((aluno) => aluno.nome == "José");
//Retorna somente a posição do objeto que possui a validação
//Retorna como objeto e não como uma array

const idades = alunos.reduce((acc, aluno) => {
  return acc + aluno.idade;
}, 0);
//Acumulador, variavel
// 0 === Como se fosse um i++

const ida_des = alunos.some((aluno) => aluno.idade < 10);
//Faz a validação de true or false, se possuir algum objeto ela apresenta true

const todosMenores = alunos.every((aluno) => aluno.idade < 10);
//Faz a validação de true or false, se TODOS estiverem no mesmo estado de validação ela apresenta true, caso contrário é false

show(todosMenores);
