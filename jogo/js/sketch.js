let imagemCenario;
let imagemPersonagem;
let cenario;
let somDoJogo;
let personagem;

function preload(){
  imagemPersonagem=loadImage('imagens/personagem/correndo.png');
  imagemCenario=loadImage('imagens/cenario/floresta.png');
  somDoJogo=loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario=new Cenario(imagemCenario,3);
  personagem= new Personagem(imagemPersonagem);
  frameRate(30);
  somDoJogo.loop();
  
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
}