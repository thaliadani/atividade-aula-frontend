const imagens = document.querySelectorAll('.carrossel-imagem');
const btnVoltar = document.getElementById('carrossel-botao-voltar');
const btnProxima = document.getElementById('carrossel-botao-proxima');

let imagemAtual = 0;
const tempoIntervalo = 5000; 

function esconderImagemAtiva() {
    imagens[imagemAtual].classList.remove('ativa');
}

function mostrarImagem() {
    imagens[imagemAtual].classList.add('ativa');
}

function proximaImagem() {
    esconderImagemAtiva();
    imagemAtual = (imagemAtual + 1) % imagens.length; // Atalho matemático para fazer o loop
    mostrarImagem();
}

function imagemAnterior() {
    esconderImagemAtiva();
    imagemAtual = (imagemAtual - 1 + imagens.length) % imagens.length;
    mostrarImagem();
}

// Inicializa a primeira imagem
mostrarImagem();

// Eventos dos botões
btnProxima.addEventListener('click', () => {
    proximaImagem();
    reiniciarTimer(); // Reinicia o tempo quando o usuário clica
});

btnVoltar.addEventListener('click', () => {
    imagemAnterior();
    reiniciarTimer();
});

// Configuração do Autoplay
let carrosselAutomatico = setInterval(proximaImagem, tempoIntervalo);

// Função para o timer não "atropelar" o clique manual do usuário
function reiniciarTimer() {
    clearInterval(carrosselAutomatico);
    carrosselAutomatico = setInterval(proximaImagem, tempoIntervalo);
}