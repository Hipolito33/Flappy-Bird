var canvas = document.getElementById('canvas') // Referênciando o canvas pra obter o tamanho da tela.
var ctx = canvas.getContext('2d') // Pede ao canvas um contexto de desenho 2D.

//Carregando imagens direto do JavaScript: 
var bg = new Image() // Background.
bg.src = 'images/bg.png'
var bird = new Image() // Bird.
bird.src = 'images/bird.png'
var canobaixo = new Image() // Cano do baixo.
canobaixo.src = 'images/canobaixo.png'
var canocima = new Image() // // Cano do alto.
canocima.src = 'images/canobaixo.png'
var chao = new Image() // Chão.
chao.src = 'images/chao.png'

// Variáveis: 
var eec = 100  // Espaço entre os canos em pixels.
var constant  // Será usada pra soma depois.
var bX = 33  // Posição X do Bird.
var bY = 200  // Posição Y do Bird.
var gravidade = 1.4  // Gravidade para suavizar os movimentos do Bird.
var score = 0  // Guarda o placar do Jogo.
var cano = []

cano[0] = {
    x : canvas.clientWidth,
    y : 0
}

// Carregando Sons:
var fly = new Audio()
fly.src = 'sounds/fly.mp3'
var score = new Audio()
score.src = 'sounds/score.mp3'

function jogo(){
    // fundo do jogo
    ctx.drawImage(bg,0,0) // Background do jogo com y e x em 0

    //Desenhando o chão
    ctx.drawImage(chao,0, canvas.height - chao.height)

    //Desenhando Bird
    ctx.drawImage(bird, bX, bY)
    bY += gravidade

    requestAnimationFrame(jogo)  //faz um loop infinito para animação de cenário
}

jogo()