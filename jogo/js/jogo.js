// Arquivo de controle dos estados do sistema
class Jogo{
	constructor(){
		this.inimigoAtual = 0;
	}

	setup(){
		cenario = new Cenario(imagemCenario, 3);
		pontuacao = new Pontuacao();
		fimDeJogo = false;

		personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
		const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10, 100);
		const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 100);
		const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width , 0, 200, 200, 400, 400, 10, 100);

		inimigos.push(inimigo);
		inimigos.push(inimigoGrande);
		inimigos.push(inimigoVoador);
	}

	keyPressed() {
		if (!fimDeJogo && key === 'ArrowUp') {
			personagem.pula();
			somDoPulo.play();
		}else if(fimDeJogo && key === 'Enter'){
			window.location.reload();
		}
	}

	draw() {
		cenario.exibe();
		cenario.move();

		pontuacao.exibe();
		pontuacao.adicionarPonto();
		personagem.exibe();
		personagem.aplicaGravidade();

		// Será visualizado um inimigo por vez
		const inimigo = inimigos[this.inimigoAtual];
		// Controle do inimigo dentro da tela
		const inimigoVisivel = inimigo.x < -inimigo.largura;

		inimigo.exibe();
		inimigo.move();

		// Verifica se o inimigo já saiu da tela para que o p´roximo venha
		if(inimigoVisivel){
			// Alterar a velocidade dos inimigos para não ficar fácil de mais o jogo
			this.inimigo.velocidade = parseInt(random(10,30));
			// Retorna o próximo inimigo
			this.inimigoAtual++;
			// Como existe somente 3 inimigos, temos que controlar o restart dos inimigos
			if(inimigoAtual > 2){
				this.inimigoAtual = 0;
			}
		}

		if (personagem.estaColidindo(inimigo)) {
			image(imagemGameOver, width/2 - 200, height/3);

			gameOver();
			noLoop();
		}    
	}
}