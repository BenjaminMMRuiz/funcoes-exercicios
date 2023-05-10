//# Exercício 3


//a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos 
//e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

//b) Em seguida, fora das funções, 
//receba do usuário dois números e armazene-os em variáveis.

//c) Invoque cada uma das 4 funções, 
//passando como argumento os dois números recebidos do usuário.

//d) Por fim, crie variáveis para receber o retorno de cada 
//uma das funções e imprima o resultado das operações no console.


let soma = (num1, num2) => {
    return num1 + num2
    
}
let subtracao = (num1, num2) => {
   return num1 - num2
   
}
let multiplicacao = (num1, num2) => {
   return num1 * num2
   
}
let divisao = (num1, num2) => {
   return num1 / num2
   
}

let num1 = Number(prompt("Digite um numero: "))
let num2 = Number(prompt("Digite um numero: "))

console.log(soma(num1, num2))
console.log(subtracao(num1, num2))
console.log(multiplicacao(num1, num2))
console.log(divisao(num1, num2))

let var1 = soma (num1, num2)
let var2 = subtracao (num1, num2)
let var3 = multiplicacao (num1, num2)
let var4 = divisao (num1, num2)

console.log(var1)
console.log(var2)
console.log(var3)
console.log(var4)