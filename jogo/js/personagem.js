class Personagem{
  constructor(imagem){
    this.imagem=imagem;
    this.x=0;
    this.y=0;
  }
  
  exibe(){
    image(this.imagem, 0, height-135,110,135,this.x,this.y,220,270);
    
    this.anima();
  }
  
  anima(){
    this.x=this.x+220;
    
    
    if(this.x>=880){
      this.x=0;
      this.y=this.y+270;
    }
    if(this.y>=1080){
      this.y=0;
    }
  }
}