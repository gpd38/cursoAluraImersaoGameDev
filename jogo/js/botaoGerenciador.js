class BotaoGerenciador {
  constructor(texto, x, y, cssClasseBotao) {
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.botao = createButton(this.texto)
    this.botao.mousePressed(() => this._alteraCena())
    this.botao.addClass(cssClasseBotao);
  }

  draw() {
    this.botao.position(this.x, this.y);
    this.botao.center('horizontal');
  }

  _alteraCena() {
    this.botao.remove();
    cenaAtual = 'jogo';
  }
}