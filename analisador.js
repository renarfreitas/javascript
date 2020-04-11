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
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adcionado.`
    lista.appendChild(item)
    res.innerHTML = ''
  } else {
    window.alert('Valor inválido ou já encontrado na lisat.')
  }
  num.value = ''
  num.focus()
}

function finalizar() {
  if (valores.length == 0) {
    window.alert('Adicione valores antes de finalizar!')
  } else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for(let pos in valores){
      soma += valores[pos]
      if (valores[pos] > maior)
      maior = valores[pos]
      if (valores[pos] < menor)
      menor = valores[pos]
    }
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos: ${tot}, números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi: ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi: ${menor}.</p>`
    res.innerHTML += `<p>Somando todos os valores temos: ${soma}.</p>`
    res.innerHTML += `<p>A média de todos os valores é: ${media}.</p>`
  }
  
}