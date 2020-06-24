let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemGameOver;
let somDoPulo;

let cenario;
let somDoJogo;
let personagem;
let inimigo;
let inimigoGrande;
let inimigoVoador;
let pontuacao;

const matrizInimigo = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
];
const matrizPersonagem = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
];
const matrizInimigoGrande = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
];
const matrizInimigoVoador = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
];
const inimigos = [];

function preload() {
  imagemCenario = loadImage('img/cenario/floresta.png');
  imagemGameOver = loadImage('img/assets/game-over.png');
  imagemPersonagem = loadImage('img/personagem/correndo.png');
  imagemInimigo = loadImage('img/inimigos/gotinha.png');
  imagemInimigoVoador = loadImage('img/inimigos/gotinha-voadora.png');
  imagemInimigoGrande = loadImage('img/inimigos/troll.png');
  somDoJogo = loadSound('som/trilha_jogo.mp3');
  somDoPulo = loadSound('som/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  pontuacao = new Pontuacao();
  fimDeJogo = false;
  
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
  const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10, 200);
  const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 1500);
  const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width , 0, 200, 200, 400, 400, 10, 2500);
  
  inimigos.push(inimigo);
  inimigos.push(inimigoGrande);
  inimigos.push(inimigoVoador);
  
  frameRate(30);
  somDoJogo.loop();
}

function keyPressed() {
  if (!fimDeJogo && key === 'ArrowUp') {
    personagem.pula()
    somDoPulo.play()
  }else if(fimDeJogo && key === 'Enter'){
    window.location.reload();
  }
}

function draw() {
  cenario.exibe();
  cenario.move();
  
  pontuacao.exibe();
  pontuacao.adicionarPonto();
  personagem.exibe();
  personagem.aplicaGravidade();

  inimigos.forEach(inimigo => {
    inimigo.exibe();
    inimigo.move();
    
    if (personagem.estaColidindo(inimigo)) {
      image(imagemGameOver, width/2 - 200, height/3);
      gameOver();
      noLoop();
    }    
  });
}

function gameOver() {  
  fill("#fff");
  image(imagemGameOver, width / 2 - 200, height / 3);

  somDoJogo.stop()

  textSize(30);
  text("Pressione ENTER para tentar novamente.", width - 100, height - 100)  

  fimDeJogo = true;
}