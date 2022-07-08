
const github = document.getElementById('link1')
const linkedin = document.getElementById('link2')
const logo = document.getElementById('logo')
const chaveE = document.getElementById('chaveE')
const piiLogo = document.getElementById('piiLogo')
const chaveD = document.getElementById('chaveD')
const main = document.getElementById('ajustador')


github.onclick = function () {
    window.open('https://www.github.com/Piicareta')
}

linkedin.onclick = function () {
    window.open('https://www.linkedin.com/in/piicareta/')
}

logo.onmouseover = function () {
        chaveE.classList.add('chaveE_anima')
        piiLogo.classList.add('piiLogo_anima')
        chaveD.classList.add('chaveD_anima')
        main.classList.add('ajustador_anima')
}
