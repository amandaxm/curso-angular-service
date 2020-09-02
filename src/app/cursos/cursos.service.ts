//classes que dependem de outras
//injeção de dependencia para isso 

import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';


//avisa ao angular que é uma classe injetavel
@Injectable()
export class CursosService{
  //emitr eventos para aplicação escutar
    emitirCursoCriado = new EventEmitter<string>();

    //nao precisamos da instancia da classe para acessa-lo
    static criouNovoCurso = new EventEmitter<string>();

    private cursos: string[]=['Angular2','Java','Node'];
    //instancia log service disponivel
    constructor(private logService: LogService){
        console.log('CursoService');
    }
    getCursos(){
        this.logService.consolelog('Obtendo lista de curso');
       return this.cursos; 
    }
    addCurso(curso: string){
        this.logService.consolelog(`Criando novo curso ${curso}`);
        this.cursos.push(curso);
        //emitir toda vez que um curso for criado
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}