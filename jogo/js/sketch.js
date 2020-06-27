function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40)
  somDoJogo.loop();
  jogo = new Jogo()
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
    jogo,
    telaInicial,
    telaHistoria
  };
  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2, 'botao-tela-inicial');
  botaoHistoria = new BotaoGerenciador('História', width / 2, height / 3, 'botao-tela-historia');
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}