function buscar() {
  let pal = window.document.getElementById('txt1')
  let res = window.document.getElementById('res')
  let infor = String(pal.value)
  res.innerHTML = `A palavra que você digitou foi: ${infor}`
}