import { Component, OnInit } from '@angular/core';
import { VagasService } from '../vagas.service';
import { Vaga } from '../models/Vagas.model';

@Component({
  selector: 'app-mural-vagas',
  templateUrl: './mural-vagas.component.html',
  styleUrls: ['./mural-vagas.component.less']
})
export class MuralVagasComponent implements OnInit {

  public vagas: Vaga[] = [];

  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
    this.listarVagas();
  }

  listarVagas(){
    this._vagasService.getVagas()
      .subscribe(
        retornaVaga => {
          this.vagas = retornaVaga.map(
            item=>{
              return new Vaga(
                item.id,
                item.nome,
                item.descricao,
                item.salario
              );
            }
          )
        }
      )
  }
}
