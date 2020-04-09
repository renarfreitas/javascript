let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumber(n) {
  if(Number(n) >= 1 && Number(n) <=100) {
    return true
  } else {
    return false
  }
}

function inListen(n, l){
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar(){
  if(isNumber(num.value) && !inListen(num.value, valores)) {
    window.alert('Tudo Ok!')
  } else {
    window.alert('Valor inválido ou já encontrado na lisat.')
  }
}