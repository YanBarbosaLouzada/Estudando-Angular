import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  public formFrutas: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formFrutas = formBuilder.group({
      nome: ["", Validators.required],
      cor: ["", Validators.required],
      preco: ["", Validators.required]
    });
  }

  ngOnInit(): void {
  }

  public heroi: any = {
    nome: "",
    idade: NaN,
    poder: ""
  }

  cadastrarFrutas() {
    if (this.formFrutas.valid) { alert('foi') } else { alert('nao foi') }
  }
}

