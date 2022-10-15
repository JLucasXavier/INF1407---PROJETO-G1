const palavras = ["CATAR", "EQUADOR", "SENEGAL", "HOLANDA", "INGLATERRA", "IRA", "GALES", "ARGENTINA", "ARABIA SAUDITA", "MEXICO", "POLONIA", "FRANCA", "AUSTRALIA", "DINAMARCA", "TUNISIA", "ESPANHA", "COSTA RICA", "ALEMANHA", "JAPAO", "BELGICA", "CANADA", "MARROCOS", "CROACIA", "BRASIL", "SERVIA", "SUICA", "CAMAROES", "PORTUGAL", "GANE", "URUGUAI"]
const textarea = document.querySelector('textarea')
const buttons = document.querySelectorAll('.btn')
const confirmar_btn = document.querySelector('.confirmar')
const delete_btn = document.querySelector('.deletar')
let palavraForca;
let tentativas = 8;
let tmp = [];

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (textarea.textLength == 0) {
            textarea.value += btn.innerText
        }
    })
})

delete_btn.addEventListener('click', () => {
    textarea.value = ''
})

confirmar_btn.addEventListener('click', () => {
    verificaLetra(textarea.value)
    textarea.value = ''
})

selecionaSelecao();

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
    tentativas--;
    if (tentativas == 0) {
        var resposta = confirm("Infelizmente, você perdeu =(. Tente novamente")
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
}