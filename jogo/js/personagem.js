class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, controleColisao) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, controleColisao);
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;

    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.alturaDoPulo = -50
    this.pulos = 0
    this.invencivel = false
  }

  pula() {
    if (this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo
      this.pulos++
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade

    if (this.y > this.yInicial) {
      this.y = this.yInicial
      this.pulos = 0
    }
  }

  tornarInvencivel() {
    this.invencivel = true
    setTimeout(() => {
      this.invencivel = false
    }, 1000)
  }

  // Metodo melhorado com a ajuda do usuário GomesRodrigo
  estaColidindo(inimigo){
    if (this.invencivel) {
      return false
    }    
    const myCollisionPolygon = this.controleColisao.map(v => createVector(v[0] + this.x, v[1] + this.y))
    const theirCollisionPolygon = inimigo.controleColisao.map(v => createVector(v[0] + inimigo.x, v[1] + inimigo.y))
    const colidiu = collidePolyPoly(myCollisionPolygon, theirCollisionPolygon);
    
    noFill();
    stroke(0, 0, 255)
    beginShape()
    myCollisionPolygon.forEach(v => vertex(v.x, v.y))
    endShape(CLOSE);
    
    stroke(255, 0, 0)
    beginShape()
    theirCollisionPolygon.forEach(v => vertex(v.x, v.y))
    endShape(CLOSE);
    
    return colidiu;
  }
  
//   estaColidindo(inimigo) {
//     if (this.invencivel) {
//       return false
//     }
//     const precisao = 0.7;
//     //noFill();
//     rect(this.x, this.y, this.largura * precisao, this.altura * precisao);
//     rect(inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);
//     const colisao = collideRectRect(this.x, this.y, this.largura * precisao, this.altura * precisao, inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);

//     return colisao;
//   }
}