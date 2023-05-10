//# Exercício 1

//a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
function seuNome (nome){
    console.log("Olá,", nome)

}
console.log(seuNome("Benjamin"))

//b) Declare uma função que receba um número como parâmetro e imprima no console a tabuada de 1 a 10 dele. 
//Chame esta função várias vezes com números diferentes.

function tabuada(){
    let mult = Number(prompt("Infome o numero para ser feita a tabuada"))
    
    console.log(`${mult} X ${1} = ${mult*1}`)
    console.log(`${mult} X ${2} = ${mult*2}`)
    console.log(`${mult} X ${3} = ${mult*3}`)
    console.log(`${mult} X ${4} = ${mult*4}`)
    console.log(`${mult} X ${5} = ${mult*5}`)
    console.log(`${mult} X ${6} = ${mult*6}`)
    console.log(`${mult} X ${7} = ${mult*7}`)
    console.log(`${mult} X ${8} = ${mult*8}`)
    console.log(`${mult} X ${9} = ${mult*9}`)
    console.log(`${mult} X ${10} = ${mult*10}`)

}
console.log(tabuada())


//c) Comente as funções criadas acima, 
//e reescreva-as utilizando expressões de função, ou __arrow functions__ 

const somar = (a,b) => {

    return a + b
}

const resultado = somar (2,5)
console.log(resultado)