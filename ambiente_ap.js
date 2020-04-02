/*
Variáveis Compostas
Array ou Vetor: è uma variável que tem vários elementos cada elemento é composto por seu valor e uma chave de identifcação.
Declaração em javascript:
let num = []
*/

let num = [5,8,2,9,3]

console.log(`Nosso vetor é o ${num}`)

//Acrescentar valores a um Array, por duas maneiras, determinando o indece ou metodo interno que acrescenta valores ao final
num[5]= 6
num.push(7)
console.log(`Nosso vetor agora é: ${num}`)

//Identificandoo comprimento do Array:
console.log(`Nosso vetor tem: ${num.length} posições`)

//Comando para ordenação do Array:
console.log(`Nosso Array organizando: ${num.sort()}`)

//Estrutura de repetição com Array:
let valores = [8,1,7,4,2,9]
console.log(`O novo vetor é: valores ${valores}`)
 for(let pos = 0; pos < valores.length; pos ++){
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
//Essa é top!!
for(let pos in valores) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
console.log(`Nosso vetor organizado é: ${valores.sort()} posições`)

//Buscar valores dentro do Array
//a função busca o valor e retorna a chave onde o valor se encontra dentro do Array

let posi = valores.indexOf(7)
if (posi == -1) {
  console.log('O valor não foi encontrado!')
} else {
  console.log(`O valor 3 está na posição ${posi}`)
}