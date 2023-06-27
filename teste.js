let tela = document.querySelector("#tabuleiroCanvas");
let pincel = tela.getContext('2d');

function desenhaRetangulo(cor, xInicial, Yinicial, largura, altura) {

    pincel.fillStyle = cor;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.rect(xInicial, Yinicial, largura, altura);
    pincel.closePath();
    pincel.fill();
    pincel.stroke();

}

function desenhaGrid() {
    for (let linha = 0; linha <= 500;linha += 25) {
        for(let coluna = 0; coluna <= 500; coluna += 25) {
            pincel.rect(linha, coluna, 25, 25);
            if (coluna % 2 === 0) {
                desenhaRetangulo("yellow", linha, coluna, 25, 25);
            }
           else {
            desenhaRetangulo("green", linha, coluna, 25, 25);
           }

        }
    }
}

desenhaRetangulo("yellow", 0, 0, 25, 25);
desenhaGrid()