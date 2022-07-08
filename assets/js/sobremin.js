
const anos = document.getElementById('anos')
const niver = new Date('Nov 01 1992')
const hoje = new Date()
const diferença = Math.abs(hoje.getTime() - niver.getTime())

const idade = Math.floor(diferença/1000/60/60/24/365)

anos.innerHTML = idade + ' anos'