const imagens = document.querySelectorAll('.carrossel-imagem');
const btnVoltar = document.getElementById('carrossel-botao-voltar');
const btnProxima = document.getElementById('carrossel-botao-proxima');

let imagemAtual = 0;

function esconderImagemAtiva() {
    imagens[imagemAtual].classList.remove('ativa');
}

function mostrarImagem() {
    imagens[imagemAtual].classList.add('ativa');
}

// Inicializa a primeira imagem
mostrarImagem();

btnProxima.addEventListener('click', () => {
    esconderImagemAtiva();
    if (imagemAtual === imagens.length - 1) {
        imagemAtual = 0;
    } else {
        imagemAtual++;
    }
    mostrarImagem();
});

btnVoltar.addEventListener('click', () => {
    esconderImagemAtiva();
    if (imagemAtual === 0) {
        imagemAtual = imagens.length - 1;
    } else {
        imagemAtual--;
    }
    mostrarImagem();
});