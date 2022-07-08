
const css = document.getElementById('css')
const html = document.getElementById('html')
const js = document.getElementById('js')
const react = document.getElementById('react')
const content = document.getElementById('content')
const skills = document.getElementById('skills')

css.onmouseover = function () {
    setTimeout(function(){
        css.style.width = '110px'
    }, 150)
    css.style.width = '140px'
    content.innerHTML = '<h3>- CSS -</h3></p><br><p>É um mecanismo para adicionar estilo a um documento web.'
    content.style.fontSize = '2.4rem'
}

html.onmouseover = function () {
    setTimeout(function(){
        html.style.width = '110px'
    }, 150)
    html.style.width = '140px'
    content.innerHTML = '<h3>- HTML -</h3><br><p>É uma linguagem de marcação utilizada na construção de páginas na Web.'
    content.style.fontSize = '2.4rem'
}

js.onmouseover = function () {
    setTimeout(function(){
        js.style.width = '110px'
    }, 150)
    js.style.width = '140px'
    content.innerHTML = '<h3>- JavaScript -</h3><br><p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.'
    content.style.fontSize = '2.4rem'
}

react.onmouseover = function () {
    setTimeout(function(){
        react.style.width = '110px'
    }, 150)
    react.style.width = '140px'
    content.innerHTML = '<h3>- React JS -</h3><br><p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.'
    content.style.fontSize = '2.4rem'
}

css.onclick = function () {
    skills.scrollIntoView()
}

html.onclick = function () {
    skills.scrollIntoView()
}

js.onclick = function () {
    skills.scrollIntoView()
}
react.onclick = function () {
    skills.scrollIntoView()
}