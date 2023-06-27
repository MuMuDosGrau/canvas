
let tela = document.querySelector("#tabuleiroCanvas2"); // Váriavel que seleciona a tela.
let pincel = tela.getContext('2d'); // Váriavel usada para pintar na tela.

// Váriavel que define a posição do objeto.
let x = 12.5;
let y = 12.5;

// códigos do teclado
const esquerda = 37
const cima = 38
const direita = 39
const baixo = 40

// Quantidade de pixel que o objeto se movimenta.
const taxa = 25;

// função que cria o objeto.
function desenhaCirculo(x, y, raio) {

    pincel.fillStyle = 'yellow';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();//metodo para preencher o desenho
    pincel.closePath();
}

// função que desenha o grid.
function limpaTela() {
    pincel.fillStyle = "green";
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.rect(0, 0, 25, 25);
    pincel.rect(0, 25, 25, 25);
    pincel.rect(0, 50, 25, 25);

    for(let linha = 0; linha <= 50; linha + 25){
        for(let coluna = 0; coluna <= 50; conula + 25){
            pincel.rect(linha, coluna, 25, 25)
        }
    }

    pincel.closePath();
    pincel.fill();
    pincel.stroke();
    
}

// função para atualizar a tela, desenhando o grid e o objeto.
function atualizaTela() {

    limpaTela();

    desenhaCirculo(x, y, 10);

}

setInterval(atualizaTela, 20); // função para chamar o "atualizaTela" em um intervalo de tempo dado como segundo parâmetro.

// função que determina pra onde o objeto irá se movimentar.
function leDoTeclado(evento) {

    if (evento.keyCode == cima && y - taxa > 0) {
        y = y - taxa;

    } else if (evento.keyCode == baixo && y + taxa < 500) {
        y = y + taxa;

    } else if (evento.keyCode == esquerda && x - taxa > 0) {
        x = x - taxa;

    } else if (evento.keyCode == direita && x + taxa < 500) {
        x = x + taxa;
    }
}


document.onkeydown = leDoTeclado;