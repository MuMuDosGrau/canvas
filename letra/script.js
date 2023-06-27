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
                desenhaRetangulo("purple", linha, coluna, 25, 25);
            }
           else {
            desenhaRetangulo("yellow", linha, coluna, 25, 25);
           }

        }
    }
}

desenhaRetangulo("yellow", 0, 0, 25, 25);
desenhaGrid()

function desenhaLetra() {

    pincel.fillStyle = "black";
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.rect(75, 0, 25, 25);
    pincel.rect(225, 0, 25, 25);
    pincel.rect(250, 0, 25, 25);
    pincel.rect(275, 0, 25, 25);
    pincel.rect(300, 0, 25, 25);
    pincel.rect(100, 0, 25, 25);
    pincel.rect(125, 0, 25, 25);
    pincel.rect(150, 0, 25, 25);
    pincel.rect(175, 0, 25, 25);
    pincel.rect(200, 0, 25, 25);
    pincel.rect(200, 25, 25, 25);
    pincel.rect(200, 50, 25, 25);
    pincel.rect(200, 75, 25, 25);
    pincel.rect(200, 100, 25, 25);
    pincel.rect(200, 125, 25, 25);
    pincel.rect(200, 150, 25, 25);
    pincel.rect(200, 175, 25, 25);
    pincel.rect(200, 200, 25, 25);
    pincel.rect(200, 225, 25, 25);
    pincel.rect(200, 250, 25, 25);
    pincel.rect(200, 275, 25, 25);
    pincel.rect(175, 275, 25, 25);
    pincel.rect(150, 275, 25, 25);
    pincel.rect(125, 275, 25, 25);
    pincel.rect(100, 275, 25, 25);
    pincel.rect(75, 275, 25, 25);
    pincel.rect(75, 250, 25, 25);
    pincel.rect(75, 225, 25, 25);
    pincel.rect(75, 200, 25, 25);
    pincel.rect(75, 175, 25, 25);

    pincel.closePath();
    pincel.fill();
    pincel.stroke();

}

desenhaLetra();

