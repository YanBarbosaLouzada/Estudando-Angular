import { Component, OnInit } from '@angular/core';
import { CalcularNotaService } from 'src/app/services/calcular-nota.service';

@Component({
  selector: 'app-calc-nota',
  templateUrl: './calc-nota.component.html',
  styleUrls: ['./calc-nota.component.css'],
})
export class CalcNotaComponent implements OnInit {

  public nota1: number =NaN;
  public nota2: number =NaN;
  public nota3: number =NaN;
  public media: number= 0.0;

  constructor(private calcNotaservice: CalcularNotaService) { }

  calcularMedia(){
    this.media = this.calcNotaservice.calculaNota(this.nota1, this.nota2,this.nota3)
  }


  ngOnInit(): void {
  }

}
