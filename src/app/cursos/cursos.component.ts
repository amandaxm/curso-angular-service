import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos: string[] = [];
  cursosService: CursosService;
  //a injeção de dependencia é feita atraves do construtor
  constructor(_cursosService: CursosService) {
    this.cursosService = _cursosService;
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
    CursosService.criouNovoCurso.subscribe(
      //se increve na emissao do evento
      //notificação ao ser modificado
      curso => this.cursos.push(curso)//curso foi enviado via eventemitter



    );
  }

}
