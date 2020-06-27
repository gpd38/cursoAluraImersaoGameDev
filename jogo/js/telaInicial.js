class TelaInicial {
  constructor() {

  }

  draw() {
    this._imagemDeFundo();
    this._texto();
    this._botaoStart();
    // this._botaoHistoria();
  }

  _imagemDeFundo() {
    // Exibir a tela inicial do jogo onde o start aparece
    image(imagemTelaInicial, 0, 0, width, height);
  }

  _texto() {
    textFont(fonteTelaInicial);
    textAlign(CENTER)
    textSize(50);
    text('As aventuras de', width / 2, height / 3);
    textSize(150);
    text('Hipsta', width / 2, height / 5 * 3)
  }

  _botaoStart() {
    botaoGerenciador.y = height / 7 * 5;
    botaoGerenciador.draw();
  }

}