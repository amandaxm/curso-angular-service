//classes que dependem de outras
//injeção de dependencia para isso 

import { Injectable, EventEmitter } from '@angular/core';
//avisa ao angular que é uma classe injetavel
@Injectable()
export class CursosService{
  //emitr eventos para aplicação escutar
    emitirCursoCriado = new EventEmitter<string>();

    //nao precisamos da instancia da classe para acessa-lo
    static criouNovoCurso = new EventEmitter<string>();

    private cursos: string[]=['Angular2','Java','Node'];
    constructor(){
        console.log('CursoService');
    }
    getCursos(){
       return this.cursos; 
    }
    addCurso(curso: string){
        this.cursos.push(curso);
        //emitir toda vez que um curso for criado
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}