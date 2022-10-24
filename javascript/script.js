const palavras = ["CATAR", "EQUADOR", "SENEGAL", "HOLANDA", "INGLATERRA", "IRA", "GALES", "ARGENTINA", "MEXICO", "POLONIA", "FRANCA", "AUSTRALIA", "DINAMARCA", "TUNISIA", "ESPANHA", "ALEMANHA", "JAPAO", "BELGICA", "CANADA", "MARROCOS", "CROACIA", "BRASIL", "SERVIA", "SUICA", "CAMAROES", "PORTUGAL", "GANE", "URUGUAI"]
const textarea = document.querySelector('textarea')
const buttons = document.querySelectorAll('.btn')
const confirmarBto = document.querySelector('.confirmar')
const deletarBto = document.querySelector('.deletar')
const forcaImagem = document.querySelector('#forca')
const bolaImagem = document.querySelector('#bola')
let palavraForca;
let tentativas = 1;
let tmp = [];

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (textarea.textLength == 0) {
            textarea.value += btn.innerText
        }
    })
})

deletarBto.addEventListener('click', () => {
    textarea.value = ''
})

confirmarBto.addEventListener('click', () => {
    verificaLetra(textarea.value)
    textarea.value = ''
})

onload = function () {
    selecionaSelecao();
}

function selecionaSelecao() {
    const indice = parseInt(Math.random() * palavras.length)
    const palavraJogo = document.getElementById("palavra");
    palavraForca = palavras[indice];
    for (i = 0; i < palavraForca.length; i++) {
        tmp[i] = "&nbsp;";
        palavraJogo.innerHTML = palavraJogo.innerHTML + "<div class='letra'>" + tmp[i] + "</div>"
    }
}

function verificaLetra(letra) {
    document.getElementById(letra).disabled = true;
    if (palavraForca.includes(letra)) {
        document.getElementById(letra).style.background = "#32CD32";
        bolaImagem.setAttribute('src','img/bola'+1+'.png')
        for (i = 0; i < palavraForca.length; i++) {
            if (palavraForca[i] == letra) {
                tmp[i] = letra;
            }
        }
        apareceLetra();
    } else {
        document.getElementById(letra).style.background = "#FF0000";
        verificaStatusGame();
    }
}

function verificaStatusGame() {
    tentativas++;
    forcaImagem.setAttribute('src','img/forca'+tentativas+'.png')
    bolaImagem.setAttribute('src','img/bola'+2+'.png')
    if (tentativas == 9) {
        var resposta = confirm("Infelizmente, você perdeu =(\nOK - JOGAR NOVAMENTE | CANCELAR - SAIR DO JOGO")
        if (resposta) {
            location.reload();
        } else {
            window.location.replace('Login.html')
        }
    }
}

function apareceLetra() {
    const palavraJogo = document.getElementById("palavra");
    palavraJogo.innerHTML = "";
    for (i = 0; i < palavraForca.length; i++) {
        palavraJogo.innerHTML = palavraJogo.innerHTML + "<div class='letra'>" + tmp[i] + "</div>"
    }
    if(!tmp.includes("&nbsp;")){
        palavraCompleta();
    }
}

function palavraCompleta(){
    var resposta = confirm("Parabéns, você ganhou =)\nOK - JOGAR NOVAMENTE | CANCELAR - SAIR DO JOGO")
    if (resposta) {
        location.reload();
    } else {
        window.location.replace('Login.html')
    }
}