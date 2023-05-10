//# Exercício 2
//Declare e invoque as funções abaixo:

//a) Uma função que recebe 2 números como parâmetros e que imprime a soma deles. 
//Invoque a função e verifique o resultado no console.
const soma = (a, b) => {
    return a + b
}
console.log(soma(7, 10))

//b) Uma função que recebe 2 números e imprime um booleano que 
//informa se o primeiro número é **maior ou igual** ao segundo. s
const numero = (x, y) => {
    console.log(x >= y)

}
console.log(numero(4, 8))
//c) Uma função que recebe um número e imprime no console 
//um booleano informando se o número é par ou não.
const parOuImpar = (x) => {
    console.log(x % 2 === 0)

}
console.log(parOuImpar(4))


//d) Uma função que recebe um salário 
//bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.

let inss = (sal) => {
    let desconto = sal * 0.1
    return sal - desconto
}
console.log(inss(5753))