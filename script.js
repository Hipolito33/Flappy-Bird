var canvas = document.getElementById('canvas') // Referênciando o canvas pra obter o tamanho da tela.
var ctx = canvas.getContext('2d') // Pede ao canvas um contexto de desenho 2D


//Carregando imagens direto do JavaScript: 

var bg = new Image() // Background
bg.src = 'images/bg.png'
var bird = new Image() // Bird
bird.src = 'images/bird.png'
var canobaixo = new Image() // Cano do baixo
canobaixo.src = 'images/canobaixo.png'
var canocima = new Image() // // Cano do alto
canocima.src = 'images/canobaixo.png'
var chao = new Image() // Chão
chao.src = 'images/chao.png'

