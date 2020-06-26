function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  somDoJogo.loop();
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
    jogo, // ou jogo:jogo,
    telaInicial //ou telaInicial:telaInicial
  };
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw(){
  cenas[cenaAtual].draw();
}

function gameOver() {  
  fill("#fff");
  image(imagemGameOver, width / 2 - 200, height / 3);

  somDoJogo.stop()

  textSize(30);
  text("Pressione ENTER para tentar novamente.", width - 100, height - 100)  

  fimDeJogo = true;
}