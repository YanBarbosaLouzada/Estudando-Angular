import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() {
    setTimeout(
      () => {
        this.objStyle['color'] = "blue"
      }, 3000);
  }

  public user: string = "Yan Barbosa"

  public image: any = {
    src: "https://avatars.githubusercontent.com/u/113553710?s=400&u=6cbee520063367de62eb923ce5837b2b388a28cb&v=4",
    alt: "Foto de perfil Yan"
  }

  public clicar(): void {
    alert("Clicou!");
  }

  public objStyle: any = {
    'font-size': '50px',
    'color': 'red'
  }

  public classCor:string = "pink";
  public isError: boolean = false;

  public sapo :boolean=true;

  public mudarSapinho(){
    this.sapo = !this.sapo;
  }

  public peixes: string[]=[
    "tubarao",
    "polvo",
    "peixe",
    "baiacu",
    "Cavolo-marinho"
  ]

    public textoPipe: string = "texto de exemplo(pipe)"
    public numPipe: string = "33.3334"
    public nowPipe = new Date() ;
    public objPipe={
      nome:"yan",
      idade:"19",
      sexo:"masculino"
    }
    
}



